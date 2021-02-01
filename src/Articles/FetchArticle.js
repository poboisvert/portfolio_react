import React from "react";
import "./Articles.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import NavigationOptions from "../Shared/NavigationOptions";

const data = {
  content: {
    body: [
      {
        image: "https://miro.medium.com/max/3200/1*TIN8U8PrTIKNaNGn5jZcDw.png",
        title: "7 principles of icon design",
        description:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
        link: "www.google.com",
        islast: null,
        div: "articles__container",
      },
      {
        image:
          "https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_ux-1.jpg",
        title: "Create Medium posts from Markdown in a snap",
        description:
          "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        link: "www.google.com",
        islast: null,
        div: "articles__container",
      },
      {
        image:
          "https://edwardmbanasor.com/wp-content/uploads/2019/08/Medium-Logo.jpg",
        title: "23 popular Medium design articles of 2021",
        description:
          "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        link: "www.google.com",
        islast: null,
        div: "articles__container",
      },
      {
        image: "https://markdowntomedium.com/img/markdowneditor.jpg",
        title: "How to master the design pattern",
        description:
          "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        link: "www.google.com",
        islast: "last",
        div: "articles__container",
      },
    ],
  },
};

export default class FetchArticle extends React.Component {
  render() {
    return (
      <>
        {!data.content.body ? (
          "Please review the data structure for the variable data"
        ) : (
          <>
            {data.content.body.map((block) => (
              <div className={block.div + (block.islast ? " last" : "")}>
                <div className="articles__preview">
                  <img src={block.image} alt="thumbnail" />
                </div>
                <div className="articles__title">{block.title}</div>
                <h4>January 21, 2021</h4>
                <p>{block.description}</p>
                <NavigationOptions
                  Icon={ArrowRightIcon}
                  title="Read More"
                  color="#4201ff"
                />
              </div>
            ))}
          </>
        )}
      </>
    );
  }
}
