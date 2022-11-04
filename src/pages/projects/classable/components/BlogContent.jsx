import SIDEBAR from '../assets/sidebar.webp';

const BlogContent = () => {
  return (
    <article className="projects-container">
      <p>
        Classable is a feature rich full-stack application designed for online
        education. My aim with this project was to provide an efficient digital
        community for students and academic staff. Some features include: a
        highly interactive UI, live notifications, chats, resource storage and
        video call functionality.
      </p>
      <p>Let the learning begin with Classable!</p>
      <h2>Animations</h2>
      <p>asdfsdf</p>
      <h3>Responsive form design</h3>
      <img src={SIDEBAR} alt="Responsive form design with floating labels." />
    </article>
  );
};

export default BlogContent;

// ```
// // Introduction h2
//   // Purpose of the project
//   // quick feature overview
//   // tech used

// // Firebase h2
//   // Authentication and Firestore h3
//     // Sign in with google
//     // Sign in with email and password
//     // firebase authentication use code examples

// // Store Products h2
//   // can add products to basket which updates the shopping cart context
//   // can click on product to view in more details, select size and add to basket or wishlist

//     // Shopping cart and wishlist h3
//       // contexts and state management
//       // animations
//       // empty states

//     // Styling with styled components h3
//       // Styled Components uses a technique called CSS-in-JS, so you simply write your normal CSS code inside of template literals in a js file. I use the .styled.js extension to easily distinguish my styles. An interesting feature I experimented with in this project was passing props to the styled component, which can then be accessed in your .styled.js file
//       // theme provider
//       // reusable component button

// // Checkout h2
//   // styling and reusing components from the shopping cart

//     // Setting up the express server h3
//       // npm i express cors
//       // middleware to access req.body

//     // Secure payments with Stripe h3
//       // npm i stripe
//       // paymentIntent created on the server
//       // client secret used on client side to render the PaymentElement

//     // //
//     //   app.post('/create-payment-intent', async (req, res) => {

//     //   });
//     // //
//     //   const { amount } = req.body;

//     //   const paymentIntent = await stripe.paymentIntents.create({
//     //     amount,
//     //     currency: 'gbp',
//     //     automatic_payment_methods: {
//     //       enabled: true,
//     //     },
//     //   });
//     // //
//     //   const clientSecret = paymentIntent.client_secret;

//     //   res.status(201).json({ clientSecret });
//     // //
//     ```;
