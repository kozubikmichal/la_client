import * as React from "react";

//@ts-ignore
import * as pdflib from "pdfjs-dist";
import { IRestaurant, IPDFInfo } from "../../IMenu";
import { Loader } from "../Loader";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { PDFPageProxy } from "pdfjs-dist/types/display/api";

export interface IPDFPreviewDataProps {
	restaurant: IRestaurant,
	pdfInfo: IPDFInfo
}

interface IState {
	loaded: boolean,
	fullscreen: boolean,
	page: PDFPageProxy
}

export class PDFPreview extends React.Component<IPDFPreviewDataProps, {}> {
	static ScalePreview = 0.75;
	static ScaleFullscreen = 1.5;

	state: IState = {
		loaded: false,
		fullscreen: false,
		page: null
	}

	get PreviewCanvasId(): string {
		return `canvas-pdf-${this.props.restaurant.id}`
	}

	get FullscreenCanvasId(): string {
		return `${this.PreviewCanvasId}-fullscreen`
	}

	async componentDidMount() {
		if (this.state.loaded) {
			return;
		}
		let page = await this.loadPDF(this.props.pdfInfo);

		this.renderPage(this.PreviewCanvasId, PDFPreview.ScalePreview, page);
	}

	render() {
		let { restaurant } = this.props;
		let { loaded, fullscreen } = this.state;

		return (
			<div style={{overflow: "hidden"}}>
				<a onClick={() => this.onPressPreview()} style={{ cursor: "pointer" }}>
					<canvas id={this.PreviewCanvasId} hidden={ !loaded }></canvas>
				</a>
				<div hidden={loaded}>
					<Loader />
				</div>

				<Modal
					toggle={() => this.cancel()}
					isOpen={fullscreen}
					onClosed={() => this.cancel()}
					onOpened={() => this.showFullscreen()}
					className="modal-fullscreen">
					<ModalHeader toggle={() => this.cancel()}>
						{restaurant.name}
					</ModalHeader>
					<ModalBody >
						<canvas id={this.FullscreenCanvasId} hidden={ !loaded }></canvas>
					</ModalBody>
				</Modal>
			</div>
		);
	}

	private loadPDF(pdfInfo: IPDFInfo): Promise<any> {
		const corsAwareUrl = `https://cors-anywhere.herokuapp.com/${pdfInfo.url}`;
		const pdfSource = pdfInfo.content ?? corsAwareUrl;

		pdflib.GlobalWorkerOptions.workerSrc = "../dist/pdf.worker.bundle.js";

		return pdflib.getDocument(pdfSource).promise.then((pdf) => {
			return pdf.getPage(pdfInfo.pages[0]).then((page) => {
				this.setState({
					loaded: true,
					page: page
				});

				return page;
			})
		});
	}

	private renderPage(canvasId: string, scale: number, page: PDFPageProxy) {
		let viewport = page.getViewport({
			scale: scale
		});
		let canvas = document.getElementById(canvasId) as HTMLCanvasElement;
		let context = canvas.getContext("2d");

		canvas.height = viewport.height;
		canvas.width = viewport.width;

		page.render({
			canvasContext: context,
			viewport: viewport
		});
	}

	private showFullscreen() {
		this.renderPage(this.FullscreenCanvasId, PDFPreview.ScaleFullscreen, this.state.page);
	}

	private onPressPreview() {
		this.setState({
			fullscreen: true
		})
	}

	private cancel() {
		this.setState({
			fullscreen: false
		})
	}
}