import { CodeBlock, github, monokaiSublime } from 'react-code-blocks';

import { useTheme } from '../context/ThemeContext';

monokaiSublime.commentColor = '#22ca4f';
github.keywordColor = '#f92672';
github.numberColor = '#7542cd';

export default function Code({ language, code, className }) {
  const { darkTheme } = useTheme();

  return (
    <div className={`relative my-8 ${className}`}>
      <div className="code-container">
        <CodeBlock
          language={language}
          text={code}
          showLineNumbers={false}
          theme={darkTheme ? monokaiSublime : github}
          wrapLines
          codeBlock
        />
      </div>
    </div>
  );
}
