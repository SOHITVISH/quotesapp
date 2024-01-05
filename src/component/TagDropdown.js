import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags, setSelectedTag } from '../redux/actions/quoteActions';

const TagDropdown = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.quotes.tags);
  const selectedTag = useSelector((state) => state.quotes.selectedTag);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  const handleTagChange = (event) => {
    dispatch(setSelectedTag(event.target.value));
  };

  return (
    <div>
      <label>Select Tag:</label>
      <select onChange={handleTagChange} value={selectedTag || ''}>
        <option value="">All</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagDropdown;
