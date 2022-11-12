// import Contents from '../../../components/Contents';
import BlogContent from './components/BlogContent';

const Clones = () => {
  return (
    <div className="px-5 py-48 max-w-max mx-auto">
      <div className="pb-20 mb-32 border-b dark:border-gray-600">
        <h1 className="text-4xl font-bold dark:text-textHeading">
          Clone Projects
        </h1>
        <span className="dark:text-textPara">An in-depth overview</span>
      </div>

      <section className="flex gap-10">
        <BlogContent />
        {/* <Contents /> */}
      </section>
    </div>
  );
};

export default Clones;
