import * as React from "react";
import {Button, Modal, ModalFooter, ModalBody, ModalHeader, Input, Form, FormGroup, Label} from "reactstrap";
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
			<Modal isOpen={this.props.show} toggle={this.props.cancel}>
				<ModalHeader toggle={this.props.cancel}>
					Settings
				</ModalHeader>
				<ModalBody>
					<h5>Select visible restaurants:</h5>
					<Form>
						{this.props.config.restaurants.map((r, index) =>
							(
								<FormGroup check key={r.restaurant.id}>
									<Label check>
										<Input type="checkbox"
											key={r.restaurant.id}
											defaultChecked={!r.hidden}
											onChange={(e) => this.onChange(e, index)}
											/>{' '}
										{r.restaurant.name}
									</Label>
								</FormGroup>
							)
						)}
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button onClick={() => this.save()} color="primary">Save</Button>
					<Button onClick={this.props.cancel} color="secondary">Cancel</Button>
				</ModalFooter>
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