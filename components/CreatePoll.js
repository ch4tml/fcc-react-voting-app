import React from 'react';

const CreatePoll = () => {

	return (
		<div>
			<h1>Create poll</h1>
			Create Poll
			<form id="create-poll" action="/create" method="post">
				<input type="hidden" name="_csrf"/>
				<div className='poll-options'>
					<label for="title">Poll title:</label>
					<input id="title" type="text" name="title" autofocus="true" required="true"/>
				</div>
				<div className='poll-options'>
					<label for="option">Option:</label>
					<input type="text" name="option" required="true"/>
				</div>
				<div id="form-controls">
					<button class="button btn btn-success" id="add-label" type="button">Add more options</button>
					<button class="button btn btn-success" type="submit">Create</button>
				</div>
			</form>
		</div>
	);

};

CreatePoll.propTypes = {

};

export default CreatePoll;
