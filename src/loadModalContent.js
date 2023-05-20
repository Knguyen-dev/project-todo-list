// then you have your displayTodoform, etc.


/*

Note: Honestly I don't think having a loadModalContent() is going to be good, it kind of overcomplicates things.
I think just having functions that display the forms themselves is alright. 


A solution to the "what content to pass problem", would be in your event listeners, specify your function call

	displayTodoForm(modal, someTodo);


	or even 

	displayForm(modal, formElement, someItem); the item could be a todo or a project, default parameter should be used though
	and we should make sure we know what we're displaying
})



 */