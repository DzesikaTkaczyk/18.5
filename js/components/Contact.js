var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      /*React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: this.props.item.img,
          alt: this.props.item.alt
        }),
        React.createElement('div', {className: 'contactData'},
          React.createElement('p', {className: 'contactLabel'}, this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, this.props.item.lastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
          ),
        )
      )*/
      <div className={'contactItem'}>
        <img className={'contactImage'} src={this.props.item.img} alt={this.props.item.alt}/>
        <div className={'contactData'}>
          <p className={'contactLabel'}>
              Imię: {this.props.item.firstName}
          </p>
          <p className={'contactLabel'}>
              Nazwisko: {this.props.item.lastName}
          </p>
          <a href={'mailto:' + this.props.item.email}>
              {this.props.item.email}
          </a>
        </div>
      </div>
    )
  },
});