var ContactForm = React.createClass({
    propTypes: {
      contactForm: React.PropTypes.object.isRequired
    },
    render: function() {
      return (
        React.createElement('form', {className: 'contactForm'},
          React.createElement('input', {
            type:         'text',
            placeholder:  'First name',
            value:        this.props.contactForm.firstName,
          }),
          React.createElement('input', {
            type:         'text',
            placeholder:  'Last name',
            value:        this.props.contactForm.lastName,
          }),
          React.createElement('input', {
            type:         'text',
            placeholder:  'email',
            value:        this.props.contactForm.email,
          }),
          React.createElement('button', {type: 'submit'}, 'Add contact')
        )
      );
    }
  });