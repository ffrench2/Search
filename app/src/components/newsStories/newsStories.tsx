import { useAppSelector } from "../../hooks";
import "./newsStories.css";

export const NewsStories = () => {
  const storiesResults = useAppSelector((state) => state.story.stories);

  if (!!storiesResults && storiesResults.length) {
    return (
      <div className="StoryContainer" data-testid={"StoryTestId"}>
        {storiesResults.map((item: any) => {
          const links = !!item.links && !!item.links.permalink;
          const images = !!item.media[0] && !!item.media[0].url;
          return (
            <div key={item.id} className="StoryData">
              <div className="StoryDataText">
                <h2 className="StoryTitle">{item.title}</h2>
                <p className="StoryBody">
                  {!!links
                    ? item.body.substring(0, 450) + " ......"
                    : item.body}
                </p>
                {links && (
                  <a
                    href={item.links.permalink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click here to read more
                  </a>
                )}
              </div>
              {images && <img src={item.media[0].url} alt="some text" />}
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export default NewsStories;
