import * as React from "react";
import { Table } from "reactstrap";

import { IMenuSection } from "../../IMenu";

interface ISectionProps {
	section: IMenuSection
}

export class MenuSection extends React.Component<ISectionProps, {}> {
	render() {
		let section = this.props.section;

		return (
			<Table hover striped>
				{ section.name &&
					<thead>
						<tr><th>{section.name}</th></tr>
					</thead>
				}
				<tbody>
				{
					section.meals.map((meal, index) => {
						return (
							<tr key={index}>
								<td>
									{meal.name}
								</td>
								<td>
									{meal.price}
								</td>
							</tr>
						);
					})
				}
				</tbody>
			</Table>
		);
	}
}