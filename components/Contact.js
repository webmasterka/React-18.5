var Contact = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'http://icons.veryicon.com/png/System/Beautiful%20Flat%20Mono%20Color/contacts.png'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'First name: ' + this.props.contact.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Last name: ' + this.props.contact.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.contact.email}, this.props.contact.email)
      )
    );
  }
});
