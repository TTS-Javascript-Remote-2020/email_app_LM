//1. Create an object that models the data of your favorite email application.
var appData = {
    	name: 'Gmail',
    	mailbox: [
    		'inbox',
    		'starred',
        'draft',
    		'sent',
        'spam',
        'blocked'
    	],
    	contacts: [
    		{name: 'Bethany', lastMessage: "Rainman Wordpress Developer"},
    		{name: 'Arif', lastMessage: "Just checking on you"},
        {name: 'Mesko', lastMessage: "Week 7 Home Based Learning"},
        {name: 'IAmSpam', lastMessage: "I am spam"}
    	],
    	 email: [
         {
        from: 'bethany@rainman.com',
        to:  'me@gmail.com',
        subject: 'Rainman Wordpress Developer',
        mailbox: 'inbox',
        starred: true,
        spam: false,
        content: {
            text: "We currently have a position open in San Antonio, TX for an onsite Wordpress developer. If interested please reply with a cover letter, resume, and portfolio."}
         },
        {
        from: 'arif@gmail.com',
        to:  'me@gmail.com',
        subject: 'How is everything going?',
        mailbox: 'inbox',
        starred: false,
        spam: false,
        content: {
            text: "I wanted to check in and see how everything is going with class. Let me know if you need any help."}
        },
        {
        from: 'IAmSpam@gmail.com',
        to:  'me@gmail.com',
        subject: 'This is a spam email',
        mailbox: 'inbox',
        starred: false,
        spam: true,
        content: {
            text: "Hey! Do you like spam? I like spam. I'm going to spam you until your box is full. Sounds fun! Have a great day."}
        },
        {
        from: 'me@gmail.com',
        to: 'bethany@rainman.com',
        subject: 'Re: Rainman Wordpress Developer',
        mailbox: 'draft',
        starred: true,
        spam: false,
        content: "Thank you for reaching out Bethany. Attached is my cover letter, resume, and portfolio."},
        ],
        };
/*2. Once you've composed your object, write some code to address it.
  - Get a list of inbox names
  - Get a list of emails
  - Get the text of the second email in the visible list
  - Mark an email as sent
  - Add a draft email to the drafts mailbox
  - etc. etc. etc.*/
console.log("Your mailboxes include:");
console.log(appData.mailbox.join(', '));
console.log("A list of recent emails:")
console.log(appData.email);
console.log('Your second email is:')
console.log(appData.email[1]);
appData.email[3].mailbox = 'sent';
console.log(appData.email[3].mailbox);
appData.email.push({
  from: 'me@gmail.com',
  to: 'dango@kellummanagement.com',
  subject: 'Hey, thanks for the meeting.',
  mailbox: 'drafts',
  starred: false,
  spam: false,
  content: "Thank you for the wonderful meeting yesterday. I enjoyed hearing about all your opportunities and plans."});
  console.log(appData.email[4]);