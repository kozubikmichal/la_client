import * as React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Button from "reactstrap/lib/Button";
import Octicon, { X as IconX} from "@githubprimer/octicons-react";

export interface IWoWBannerDataProps {
	enabled: boolean
}

export interface IWoWBannerCallbackProps {
	loadCountdownScript: () => void;
	hide: () => void;
}

export class WoWBanner extends React.Component<IWoWBannerDataProps & IWoWBannerCallbackProps, {}> {
	componentDidMount() {
		this.props.loadCountdownScript();
	}

	render() {
		return this.props.enabled ? (
			<Row className="footer">
				<Col xs={3} className="footerImage">
					<img src="/public/img/wow_logo.png" />
				</Col>
				<Col xs={3}>
					<div data-type="countdown" data-id="1203527" className="tickcounter" style={{
						width: "100%",
						height: "100%",
						position: "relative"
					}}>
							<a href="//www.tickcounter.com/countdown/1203527/world-of-warcraft-classic" title="World of Warcraft Classic Countdown" target="_blank">World of Warcraft Classic Countdown</a>
					</div>
				</Col>
				<Col xs={1} />
				<Col xs={3}>
					<div>
						<span>
							Chystáš se hrát <a href="https://worldofwarcraft.com/en-us/wowclassic" target="_blank">WoW Classic</a>?<br/>
							Neváhej a přidej se do SAP Labs komunity!<br/>
							Stačí napsat <a href="mailto:michal.kozubik@sap.com?subject=WoW%20Classic">email.</a>
						</span>
					</div>
				</Col>
				<Col xs={2}>
					<Button onClick={() => this.hide()} color="danger" title="Neotravuj!" style={{
						float: "right"
					}}>
						<Octicon icon={IconX} />
					</Button>
				</Col>
			</Row>
		) : null;
	}

	private hide() {
		this.props.hide();
	}
}