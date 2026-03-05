import styles from "./Netflix.module.css";
import styled from 'styled-components';

export const SeriesCard = (props) => {
  const {id,img_url,name,rating,description,cast,genre,watch_url} = props.curElem; 
//Styled Component
const ButtonWatch = styled.button({
  padding: "8px 14px",
  background: "#e50914",
  border: "none",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
  "&:hover": {
    background: "#ec6f76",
  }
});
//Template Literal Syntax
// const ButtonWatch = styled.button`
//   padding: 8px 14px;
//   background: #e50914;
//   border: none;
//   border-radius: 6px;
//   color: white;
//   cursor: pointer;

//   &:hover {
//     background: #ec6f76;
//   }
// `;

//In Styled components ,you can pass a function with in the template literal to dynamically set CSS properties based on props or state.
  return (
    <li >
      <div>
        <div>
          <img
            src={img_url}
            alt={name}
            // width="40%"
            // height="40%"
          />
        </div>

        <h2>Name: {name}</h2>
        {/* Conditional Styling: If the rating is greater than or equal to 8.5, we will apply the "high-rating" class; otherwise, we will apply the "low-rating" class. */}
        <h3><span className={rating>=8.5?styles.highRating:styles.lowRating}>Rating: {rating}</span></h3>
        <p className="text-3xl font-bold text-cyan-300">Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>

        <a
          href={watch_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonWatch>Watch Now</ButtonWatch>
        </a>
      </div>
    </li>
  );
};