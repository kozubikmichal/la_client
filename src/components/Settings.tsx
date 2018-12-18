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
											onChange={(e) => this.onRestaurantChange(e, index)}
											/>{' '}
										{r.restaurant.name}
									</Label>
								</FormGroup>
							)
						)}
					</Form>
					<br />
					<h5>Effects</h5>
					<Form>
						{this.props.config.effects.map((effect, index) =>
							(
								<FormGroup check key={effect.id}>
									<Label check>
										<Input type="checkbox"
											key={effect.id}
											defaultChecked={!effect.disabled}
											onChange={(e) => this.onEffectChange(e, index)}
											/>{' '}
										{effect.name}
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

	private onRestaurantChange(event: any, index: number) {
		this.props.config.restaurants[index].hidden = !event.target.checked;
	}

	private onEffectChange(event: any, index: number) {
		this.props.config.effects[index].disabled = !event.target.checked;
	}
}