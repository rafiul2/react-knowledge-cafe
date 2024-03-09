import PropTypes from 'prop-types';
import './Blog.css';
const Blog = ({blog}) => {
  const {id, author_img} = blog;
  return (
    <div>
      {/* <img src={author_img} alt="" /> */}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog;