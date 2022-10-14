import SIGNINFORMGIF from './assets/sign-in-form.gif';
import CARTGIF from './assets/cart.gif';

const Cathort6 = () => {
  return (
    <div className="px-5 py-48 max-w-max mx-auto">
      <div className="pb-20 mb-32 border-b dark:border-gray-600">
        <h1 className="text-4xl font-bold dark:text-textHeading">
          Cathort 6 Project
        </h1>
        <span className="dark:text-textPara">An in-depth overview</span>
      </div>

      <section className="flex gap-10">
        <article className="projects-container">
          <p>
            Cat lovers, rejoice! Or, if you&apos;re not a cat lover, this site
            still has the perfect gift: stylish apparel for your furry friend 😬
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <h2>Animations</h2>
          <p>asdfsdf</p>
          <h3>Responsive form design</h3>
          <img
            src={SIGNINFORMGIF}
            alt="Responsive form design with floating labels."
          />
          <div className="flex gap-10">
            <img
              src={CARTGIF}
              alt="Shopping cart and wishlist animations, empty list and cart messages"
            />
            <p className="mt-8">
              Anyway, that&apos;s the site overview done, let&apos;s get into
              the features.
            </p>
          </div>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
          <p>
            Anyway, that&apos;s the site overview done, let&apos;s get into the
            features.
          </p>
        </article>
        <div className="sticky top-52 hidden lg:block flex-shrink-0 w-64 h-max text-sm space-y-2">
          <p>Introduction</p>
          <p className="text-textPara">Animations</p>
          <p className="text-textPara ml-4">Responsive form design</p>
        </div>
      </section>
    </div>
  );
};

export default Cathort6;
