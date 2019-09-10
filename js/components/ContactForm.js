var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('label', {for: 'firstName'}),
        React.createElement('input', {
          id: 'firstName',
          type: 'text',
          placeholder: 'Imię',
          value: this.props.contact.firstName,
        }),
        React.createElement('label', {for: 'lastName'}),
        React.createElement('input', {
          id: 'lastName',
          type: 'text',
          placeholder: 'Nazwisko',
          value: this.props.contact.lastName,
        }),
        React.createElement('label', {for: 'email'}),
        React.createElement('input', {
          id: 'email',
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      )
    )
  },
})