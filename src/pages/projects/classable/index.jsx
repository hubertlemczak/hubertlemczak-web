import Contents from '../../../components/Contents';
import BlogContent from './components/BlogContent';

const Classable = () => {
  return (
    <div className="px-5 py-48 max-w-max mx-auto scroll-mt-24">
      <header className="pb-20 mb-32 border-b dark:border-gray-600">
        <h1 className="text-4xl font-bold dark:text-textHeading">
          Classable Project
        </h1>
        <span className="dark:text-textPara">An in-depth overview</span>
      </header>

      <main className="flex gap-10 ">
        <BlogContent />
        <Contents />
      </main>
    </div>
  );
};

export default Classable;
