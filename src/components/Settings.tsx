import * as React from "react";
import {Button, Modal, Checkbox} from "react-bootstrap";
import ISettings from "../ISettings";

export interface ISettingsDataProps {
	show: boolean,
	config: ISettings
}

export interface ISettingsCallbackProps {
	cancel: () => void,
	save: (config: ISettings) => void
}

export class Settings extends React.Component<ISettingsDataProps & ISettingsCallbackProps, {}> {
	render() {
		return (
			<Modal show={this.props.show} onHide={this.props.cancel}>
				<Modal.Header closeButton>
					<Modal.Title>Settings</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Select visible restaurants:</h4>
					<span style={{ fontSize: "1.5rem"}}>
					{
						this.props.config.restaurants.map((r, index) => 
							(<Checkbox key={r.restaurant.id} defaultChecked={!r.hidden} onChange={(e) => this.onChange(e, index)} >{r.restaurant.name}</Checkbox>)
						)
					}
					</span>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => this.save()} bsStyle="primary">Save</Button>
					<Button onClick={this.props.cancel}>Cancel</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	private save() {
		this.props.save(this.props.config);
	}

	private onChange(event: any, index: number) {
		this.props.config.restaurants[index].hidden = !event.target.checked;
	}
}