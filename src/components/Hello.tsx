import * as React from "react";
import { Button } from "react-bootstrap";

export interface IHelloProps { 
	compiler: string; 
	framework: string;
}

export class Hello extends React.Component<IHelloProps, {}> {
	render() {
		return (
			<div>
				<h1>Helllo fro m X X {this.props.compiler} and {this.props.framework}!</h1>
				<Button className="asd" onClick={() => this.doSomething("ASD")} >Default</Button>
			</div>
		);
	}

	private doSomething(what: string) {
		alert(what);
	}
}