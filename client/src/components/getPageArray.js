/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable max-len */
const getPageArray = (totalReviews, currentPage) => {
  // 7 comments per page
  const numberOfPages = Math.ceil(totalReviews.length / 7);
  let result = [];
  // when current page is 1
  if (currentPage === 1) {
    if (numberOfPages <= 7) {
      result = Array.from(Array(numberOfPages), (value, index) => index + 1);
      result.push('next');
      return result;
    } else {
      result = [1, 2, 3, 'period', numberOfPages, 'next'];
      return result;
    }
  }

  if (currentPage === numberOfPages) {
    if (numberOfPages <= 7) {
      result = Array.from(Array(numberOfPages), (vaule, index) => index + 1);
      result.unshift('previous');
      return result;
    } else {
      result = ['previous', 1, 'period', numberOfPages - 2, numberOfPages - 1, numberOfPages];
      return result;
    }
  }

  if (currentPage > numberOfPages) {
    return null;
  }

  if (currentPage !== 1 || currentPage !== numberOfPages) {
    if (numberOfPages <= 7) {
      result = Array.from(Array(numberOfPages), (value, index) => index + 1);
      result.unshift('previous');
      result.push('next');
      return result;
    } else if (currentPage <= 4) {
      result = Array.from(Array(currentPage + 1), (value, index) => (index + 1));
      result.unshift('previous');
      result.push('period', numberOfPages, 'next');
      return result;
    } else if (currentPage >= numberOfPages - 3) {
      result = Array.from(Array(numberOfPages - currentPage + 2), (value, index) => currentPage - 1 + index);
      result.unshift('previous', 1, 'period');
      result.push('next');
      return result;
    } else {
      result = ['previous', 1, 'period', currentPage - 1, currentPage, currentPage + 1, 'period', numberOfPages, 'next'];
      return result;
    }
  }
};

export default getPageArray;
