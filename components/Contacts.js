var Contacts = React.createClass({
    propTypes: {
      contacts: React.PropTypes.array.isRequired
    },
    render: function() {
      var contacts = this.props.contacts.map(function(contact) {
        return React.createElement(Contact, {contact: contact, key: contact.id});
      });
      return (
        React.createElement('ul', {className: 'contactsList'}, contacts)
      );
    }
  });