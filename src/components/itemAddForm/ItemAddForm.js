import React from 'react';
import './ItemAddForm.css'

class ItemAddForm extends React.Component {

	state = {
		label: ''
	}

	onLabelChange = (e) => {
		this.setState({ label: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.addNewItem(this.state.label)
		this.setState({label: ''})
	}

	render() {

		return (
			<div>
				{/*triggers modal window*/}
				<button
					type="button"
					className="add-item btn btn-outline-primary"
					data-toggle="modal"
					data-target="#exampleModal">
					Add new item
				</button>
				{/*modal*/}
				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
				     aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header mx-auto">
								<h1 className="modal-title fs-5" id="exampleModalLabel">New task</h1>
							</div>

							<div className="modal-body">
								<form onSubmit={this.onSubmit}>
									<div className="form-group form-content">
										<label htmlFor="newItem">Add new task</label>
										<input type="text"
										       value={this.state.label}
										       className="form-control"
										       aria-describedby="todoHelp"
										       placeholder="What need to be done"
										       onChange={this.onLabelChange}/>
									</div>
									<button
										type="submit"
										className="add-item btn btn-outline-primary btn-modal">
										Add new task
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemAddForm;