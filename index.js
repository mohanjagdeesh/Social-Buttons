const Button = (props) => {
  const { class, name } = props;
  return <button className={`button${class}`}>{name}</button>
};

const element = (
  <div className="bg-image">
  <div className = "content-container">
    <h1 className="heading">Social Buttons</h1>
    <div className = "btns-container">
    <Button class="like-btn" name="Like" />
    <Button class="comment-btn" name="Comment" />
    <Button class="share-btn" name="Share" />
  </div>
  </div>
  </div>
);

ReactDOM.render(element,document.getElementById("root"));
