var contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Nowak',
		email: 'jan.nowak@example.com',
		img: 'https://i.dmarge.com/2016/09/long-hair-men-3-1057x1100.jpg',
		alt: 'Jan Nowak'
	},
	{
		id: 2,
		firstName: 'Adam',
		lastName: 'Kowalski',
		email: 'adam.kowalski@example.com',
		img: 'https://target.scene7.com/is/image/Target/GUEST_f8ab651d-fbd4-4d71-a702-6f5d974a0a28?wid=488&hei=488&fmt=pjpeg',
		alt: 'Adam Kowalski'
	},
	{
		id: 3,
		firstName: 'Zbigniew',
		lastName: 'Koziol',
		email: 'zbigniew.koziol@example.com',
		img: 'https://de9luwq5d40h2.cloudfront.net/catalog/product/large_image/62_421453.jpg',
		alt: 'Zbigniew Koziol'
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {items: contacts}, {})
			)
		);
	}
});