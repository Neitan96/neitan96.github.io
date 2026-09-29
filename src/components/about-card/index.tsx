import { AiOutlineUser } from 'react-icons/ai';
import { skeleton } from '../../utils';

// Mirrors the layout of the GitHub project card so both line up in the right column.
const AboutCard = ({
  loading,
  paragraphs,
}: {
  loading: boolean;
  paragraphs: string[];
}) => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex items-center space-x-3 mb-4">
            {loading ? (
              skeleton({
                widthCls: 'w-12',
                heightCls: 'h-12',
                className: 'rounded-xl',
              })
            ) : (
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                <AiOutlineUser className="text-2xl" />
              </div>
            )}
            <h3 className="text-base sm:text-lg font-bold text-base-content">
              {loading
                ? skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
                : 'Sobre mim'}
            </h3>
          </div>
          <div className="space-y-3 text-base text-base-content/80 leading-relaxed">
            {loading
              ? paragraphs.map((_, index) => (
                  <div key={index}>
                    {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
                  </div>
                ))
              : paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
