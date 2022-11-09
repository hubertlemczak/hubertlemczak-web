import HOME_PAGE from '../assets/home-page.png';
import JOIN from '../assets/join.png';
import CREATE_COURSE from '../assets/create-course.webp';
import COURSE_CARD from '../assets/course-view.png';
import DESKTOP_NAVBAR from '../assets/desktop-navbar.png';
import MOBILE_NAVBAR from '../assets/navbar-dropdown.webp';
import DESKTOP_SIDEBAR from '../assets/sidebar.webp';
import MOBILE_SIDEBAR from '../assets/mobile-sidebar.png';
import VIDEO_CALL from '../assets/video-call.png';
import CLASSROOM_LIST from '../assets/classroom-list.png';
import CREATE_CLASSROOM from '../assets/create-classroom.png';
import SPINNER from '../assets/spinner.webp';
import MUTE_CALL from '../assets/mute-call.webp';
import SHARE_SCREEN_PROMPT from '../assets/share-screen-prompt.png';
import SCREEN_SHARE from '../assets/screen-share.webp';
import YOUR_RESOURCES from '../assets/your-resources.webp';
import COMMUNITY_RESOURCES from '../assets/community-resources.png';
import KANBAN_BOARD from '../assets/kanban-board.webp';
import EDITABLE_TITLE from '../assets/board-title.webp';
import KANBAN_WIREFRAME from '../assets/kanban-wireframe.png';
import NOTES_VIEW from '../assets/notes-view.png';
import CONTENT_EDIT from '../assets/content-edit.png';

const BlogContent = () => {
  return (
    <article className="projects-container">
      <p>
        A feature rich full-stack application designed for online education.
        Aims to provide an efficient digital community for students and academic
        staff. Featuring a highly interactive UI, live notifications, chats,
        resource storage and video call functionality.
      </p>
      <p>Let the learning begin with Classable!</p>
      <img src={HOME_PAGE} alt="Classable home page." className="" />
      <p>
        <strong className="text-red-500 dark:text-yellow-200">
          <em>
            note it may take a minute for the server to start up after making a
            request
          </em>
        </strong>
      </p>
      <div className="grid sm:grid-cols-2 text-xl place-items-center gap-5">
        <a
          href="https://classable.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Live Application
        </a>
        <a
          href="https://github.com/hubertlemczak/classable-api"
          target="_blank"
          rel="noreferrer"
        >
          API Spec
        </a>
        <a
          href="https://github.com/hubertlemczak/classable/blob/main/plan/classable-erd.png"
          target="_blank"
          rel="noreferrer"
        >
          Entity Relationship Diagram
        </a>
        <a
          href="https://raw.githubusercontent.com/hubertlemczak/classable/main/plan/wireframe-plan.svg"
          target="_blank"
          rel="noreferrer"
        >
          Page Wireframes
        </a>
      </div>
      <h3> Tools used</h3>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>Styled-Components</li>
        <li>Express</li>
        <li>Prisma</li>
        <li>PostgreSQL</li>
        <li>Supabase</li>
        <li>
          <a
            href="https://docs.agora.io/en/video-calling/get-started/get-started-sdk"
            target="_blank"
            rel="noreferrer"
          >
            Agora.io
          </a>
        </li>
        <li>
          <a href="https://socket.io/" target="_blank" rel="noreferrer">
            Socket.io
          </a>
        </li>
        <li>jsonwebtoken</li>
        <li>
          <a
            href="https://github.com/hello-pangea/dnd"
            target="_blank"
            rel="noreferrer"
          >
            @hello-pangea/dnd
          </a>
        </li>
        <li>Jest</li>
        <li>bcrypt</li>
        <li>
          <a
            href="https://www.npmjs.com/package/ts-node-dev"
            target="_blank"
            rel="noreferrer"
          >
            ts-node-dev
          </a>
        </li>
      </ul>
      <h2>Express error handling middleware</h2>
      <p>
        Using{' '}
        <a
          href="https://www.npmjs.com/package/express-async-errors"
          target="_blank"
          rel="noreferrer"
        >
          express-async-errors
        </a>{' '}
        we can create a &apos;catch-all&apos; middleware for errors.
      </p>
      <h2>Authentication</h2>
      <p>
        API endpoints can be protected behind an authentication middleware layer
        like so:
      </p>
      <p>
        But before a user can be authenticated, they will need to create or log
        into an existing account to receive a <code>Bearer token</code> from the
        server (a public demo account is provided for testing purposes with the{' '}
        <code>use demo</code> link).
      </p>
      <img src={JOIN} alt="Sign in and Sign up forms." className="" />
      <p>
        When the user is logged in, sequential requests will contain an
        authorization header containing a valid <code>Bearer token</code>, or an
        exception will be thrown and caught by the error handling middleware.
      </p>
      <p>
        From the decoded token, we can find the user in our database and attach
        the following data to the request object:
      </p>
      <p>
        We call the <code>next()</code> function and are now able to access the
        user who is making the request further down the line in our controller
        functions.
      </p>
      <h2>Course creation</h2>
      <p>
        Users are able to create their own course and they will automatically be
        assigned the <code>COURSEADMIN</code> role on creation. A user can have
        a different role for each course: <code>STUDENT</code>,{' '}
        <code>TEACHER</code> and <code>COURSEADMIN</code>.
      </p>
      <p>
        A highly customisable and reusable form input component is used
        throughout the application. If a label prop is provided we can see
        floating label transitions for an intuative UI.
      </p>
      <img
        src={CREATE_COURSE}
        alt="Create course form."
        className="max-w-xs w-full mx-auto"
      />
      <h3> Roles and authorisation</h3>
      <p>
        We can also invite users to our course with the search by email feature.
        When we type into the search field there will not be any API calls,
        however if we wait 500ms without any input an API call will be made to
        search for users containing the inputted email.
      </p>
      <p>
        The user is able to invite found users to the course and select a role
        for them (from the roles listed above), or remove them from the invite
        list.
      </p>
      <img src={COURSE_CARD} alt="Course card." className="mx-auto" />
      <p>
        After the course is created, we are taken back to the{' '}
        <code>/courses</code> route, which renders a list of courses the user is
        enroled in. The course name must be unique but an image does not need to
        be provided as it will display the default <code>Classable logo</code>.
      </p>
      <p>Let&apos;s view our new course!</p>

      <h2>Navigation</h2>

      <p>
        Viewing our course takes us to the{' '}
        <code>/courses/:courseName/dashboard</code> route with the course name
        formatted for a more appealing look. Our example course{' '}
        <code>Classable Development</code> will look like this:{' '}
        <code>classable-development</code>
      </p>
      <h3> Top navigation bar</h3>
      <img src={DESKTOP_NAVBAR} alt="Desktop navbar." className="mx-auto" />
      <img
        src={MOBILE_NAVBAR}
        alt="Mobile responsive navbar with notifications and user dropdown."
        className="mx-auto"
      />
      <p>
        An example notification is shown and the notification count displayed in
        the green circle next to the bell icon. Clicking on the users profile
        icon also reveals additional settings the user can interact with.
      </p>
      <p>The features are fully responsive on mobile devices.</p>
      <h3> Sidebar</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <img src={DESKTOP_SIDEBAR} alt="Desktop sidebar." />
        <img src={MOBILE_SIDEBAR} alt="Mobile responsive sidebar." />
      </div>
      <p>
        Each route has a custom active SVG. The line svg is replaced with the
        solid active state svg and filled with the primary green colour as seen
        throughout the app. This sidebar is present for every route in the
        course view and the <code>Outlet</code> component from{' '}
        <code>react-router-dom</code> is wrapped in a styled-component, making
        the site have a fixed height look.
      </p>
      <h2>Live video calls</h2>
      <p>
        The implementation of this feature was easily the most exciting out of
        the rest, and the one I also spent the most time on. It was an enjoyable
        learning experience reading through available resources on peer-to-peer
        protocols and <code>WebRTC</code>, however, for this feature I decided
        to use <code>Agora&apos;s SDK</code> because of their great
        documentation and to serve as an introduction into video communication
        between multiple clients.
      </p>
      <p>
        Let&apos;s view the <code>Classroom</code> tab to explore how I created
        this interactive feature with audio, video and screen share
        capabilities, by implementing{' '}
        <a
          href="https://docs.agora.io/en/video-calling/get-started/get-started-sdk"
          target="_blank"
          rel="noreferrer"
        >
          AgoraSDK
        </a>{' '}
        and public and private rooms.
      </p>
      <img
        src={VIDEO_CALL}
        alt="Two users in a video call."
        className="mx-auto"
      />
      <p>
        Viewing the page, we are greeted with a list of all created rooms in the
        current course. As shown in the picture below, one of the rooms we
        attempted to join is password protected. Here the password is the
        classic <code>123</code>, but we can always create a new room by
        clicking the <code>Create Classroom</code> button.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <img
          src={CLASSROOM_LIST}
          alt="List of classrooms with a enter room password pop-up."
          className="w-96  md:w-80 h-full"
        />
        <img
          src={CREATE_CLASSROOM}
          alt="Create classroom pop-up form, with a room name and optional password field."
          className="w-96 md:w-80 h-full"
        />
      </div>

      <p>
        For our <code>Create Classroom form</code>, as seen above, we will need
        to fill in the required <code>Room Name</code> field to successfully
        create the room. You can also supply an optional password to create a
        private call. After creating the room, the user will need a{' '}
        <code>token</code> to join it.
      </p>
      <p>Let&apos;s see how this works on the server!</p>
      <p>
        Useful link:{' '}
        <a href="https://www.npmjs.com/package/agora-access-token">
          agora-access-token
        </a>{' '}
        package.
      </p>
      <p>
        We now have our <code>Agora token</code> on our client, the next steps
        are to navigate to the correct route, initiate the{' '}
        <code>Agora engine</code>, join the channel and publish the users video
        and audio tracks.
      </p>
      <p>
        While the client is connecting, a reusable spinner component can be seen
        to represent the loading state.
      </p>
      <img src={SPINNER} alt="Circular loading spinner." className="mx-auto" />
      <img
        src={MUTE_CALL}
        alt="User mute microphone and video feedback."
        className="mx-auto"
      />
      <p>
        If everything was successful, our call interface will load, as seen
        above, with the main video area and a media controls bar centred on the
        bottom of the page. These are the four control interactions:
      </p>
      <ul>
        <li>
          <span>
            Muting and unmuting your microphone. Muting the microphone will emit
            a <code>user-unpublished</code> event with the <code>audio</code>{' '}
            media type, which we can simply stop playing{' '}
            <code>usr.audioTrack?.stop();</code>. Unmuting will emit the
            opposite <code>user-published</code> event and play the audio track{' '}
            <code>usr.audioTrack?.play();</code>
          </span>
        </li>
        <li>
          <span>
            Enabling and disabling the camera. Toggling this control will emit
            the same events as previously described. However, when the user
            disabled their camera, they will be removed from the{' '}
            <code>users state</code>
            and will not be shown in the video grid. I&apos;m working on
            displaying a black screen with the user&apos;s name instead of
            deleting them from state.
          </span>
        </li>
        <li>
          <img
            src={SHARE_SCREEN_PROMPT}
            alt="Browser share screen pop-up askin user to choose which screen to share."
            className="mx-auto"
          />

          <span>
            Start and stop screen share. Clicking the button will show a pop-up
            screen share prompt asking the user to select which contents they
            want to share in the call. When the user clicks the share button, we
            will <code>unpublish</code> their camera track in order to{' '}
            <code>publish</code> their screen track. Users in the call can click
            on the shared screen or other users in the grid to view in{' '}
            <code>big-picture mode</code>.
          </span>
        </li>
        <li>
          <span>
            Leave call. Simply terminates and unpublishes the users tracks and
            then navigates the user back to the classroom route.{' '}
          </span>
        </li>
      </ul>
      <img
        src={SCREEN_SHARE}
        alt='Watching screen share in big picture mode and the streamer is typing "Can you see my screen?".'
        className="mx-auto"
      />
      <p>
        From the screen sharing example above, the user has chosen to share a
        specific window and other users can now view the stream in{' '}
        <code>big-picture mode</code> by clicking on it.
      </p>
      <h2 className="line-through">Dashboard</h2>
      <h2 className="line-through">Assignments</h2>
      <h2>Resources</h2>
      <p>
        My goal with the resources section was to provide a collaborative way to
        create notes and boards such as Kanban. Users can create resources that
        are accessible in a unique course. I&apos;m implementing a status
        feature allowing users to toggle their resources from{' '}
        <code>PUBLIC</code> to <code>PRIVATE</code>, which would remove it from
        the community section and would only be visible to the author.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <img src={YOUR_RESOURCES} alt="Your resources." className="mx-auto" />
        <img
          src={COMMUNITY_RESOURCES}
          alt="Community resources."
          className="mx-auto"
        />
      </div>

      <p>
        Starred resources, both community and the users, will appear under the
        starred section above the users boards. Clicking the <code>Create</code>{' '}
        button will take the user to an empty page with the newly created
        resource, where they can perform various <code>CRUD</code> operations
        for customisation.
      </p>
      <h3> Boards with drag and drop library</h3>
      <p>
        Let&apos;s view <code>Classable Dev Board</code> to explore how I
        created this interactive Kanban board by implementing the{' '}
        <a
          href="https://github.com/hello-pangea/dnd"
          target="_blank"
          rel="noreferrer"
        >
          @hello-pangea/dnd
        </a>{' '}
        drag and drop library and used a <code>PostgreSQL</code> database to
        persist the state of the board.
      </p>

      <img src={KANBAN_BOARD} alt="Kanban Board." className="mx-auto" />

      <p>
        Clicking onto the title will reaveal an editable input field which will
        send a <code>PATCH</code> request to our <code>REST API</code>. The
        updated text can be submitted by simply clicking away from the input
        field, or as seen in one of the tasks in the <code>Todo&apos;s</code>{' '}
        column, a keyboard accessibility feature will be implemented to allow a
        submit event to fire on key press such as <code>enter</code>.
      </p>

      <img src={EDITABLE_TITLE} alt="Editable title." className="mx-auto" />

      <p>
        When we click on the <code>Add new row</code> or{' '}
        <code>Add new column</code> button, the button will be replaced with an
        input field and if there is a valid input value, a new column or row
        will be created.
      </p>
      <p>
        Viewing the row will open a modal pop-up where we can edit the row title
        and content, or delete the row by pressing the three dot menu. The
        content field fully supports markdown and will be further covered in the
        notes resource section.
      </p>
      <p>The drag and drop library has the following three main components:</p>
      <p>
        To get a better understanding of how each of these components are used,
        we can take a look at our wireframe below.
      </p>
      <ul>
        <li>
          The yellow represents the droppable area of our columns and anything
          dropped outside of this area will cancel the action.
        </li>
        <li>
          The red area represents our row droppable and this also allows us to
          drop rows into different columns.
        </li>
        <li>
          The green area represents the column draggable. However, the user is
          only able to drag the column by the top header section, also known as
          the <code>draggable handle</code>, which can be specified by the{' '}
          <code>provided.dragHandleProps</code> prop from the dnd library.
        </li>
        <li>
          Finally, the purple represents the row draggable area, which can be
          dropped in its own or different column.
        </li>
      </ul>

      <img
        src={KANBAN_WIREFRAME}
        alt="Kanban board wireframe."
        className="mx-auto"
      />

      <h3> Persisting board state</h3>
      <p>
        Using <code>Prisma</code>, we can define our model relations between the{' '}
        <code>Board</code>, <code>BoardColumn</code> and{' '}
        <code>BoardColumnRow</code> in our relational <code>PostgreSQL</code>{' '}
        database.
      </p>
      <p>
        The <code>Board</code> model has a <code>one-to-many</code> relation
        with <code>BoardColumn</code>, meaning our board can have many columns.
        The same thing applies to the <code>BoardColumn</code> and{' '}
        <code>BoardColumnRow</code> models, as a column can have many rows.{' '}
      </p>
      <p>
        To persist the state of the board, the column and row entries have a
        position field (type integer), which can be sorted in ascending order
        and sent to the client. When the user performs a drag event, we first
        check if the target is in the same position (if it is we will early
        return). If the target changed positions, a <code>PATCH</code> request
        is made and we loop over the target resource to update the position
        fields in the database. Finally, we update the local state to represent
        the changes.
      </p>
      <p>After refreshing the page, all of the new changes will persist.</p>
      <h3> Notes with markdown parsing</h3>
      <p>
        Let&apos;s view <code>Classable readme</code> to explore how I created
        this interactive note editor by implementing the{' '}
        <a
          href="https://github.com/remarkjs/react-markdown"
          target="_blank"
          rel="noreferrer"
        >
          react-markdown
        </a>{' '}
        package.
      </p>

      <img src={NOTES_VIEW} alt="Notes view screen." className="mx-auto w-60" />
      <img src={EDITABLE_TITLE} alt="Editable title." className="mx-auto" />

      <p>
        The same editable title component is used for this notes and board
        section as seen above. To save a valid input value, simply click outside
        of the input field and this will send a <code>PATCH</code> request to
        our <code>REST API</code>. Currently, a keyboard accessibility feature
        is being worked on to update the title with a keydown event such as{' '}
        <code>enter</code>.
      </p>
      <p>
        To edit the content, we can click the edit icon which will show us the
        text editor below. Here we can input any valid markdown and{' '}
        <code>save</code> or
        <code>cancel</code> the changes we made. The note content supports valid
        markdown as seen in the example above such as code blocks, different
        size headings, emphasised text, nested bulleted lists and images.
      </p>

      <img
        src={CONTENT_EDIT}
        alt="Content edit text editor."
        className="mx-auto"
      />

      <h2> Messages</h2>
      <h3> Real time chat messaging with socket.io</h3>
      <h3> Ticket support system</h3>
      <h2 className="line-through">Calendar</h2>
    </article>
  );
};

export default BlogContent;

{
  /* 
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
//     ```; */
}
