import styled from '@emotion/styled';
import Tag from './Tag';

const TagList = styled.div`
  --gap: 0.5rem;

  display: inline-flex;
  flex-wrap: wrap;
  margin: 0 calc(-1 * var(--gap)) calc(-1 * var(--gap)) 0;

  ${Tag} {
    margin: 0 var(--gap) var(--gap) 0;
  }

  @supports (gap: 0) {
    margin: unset;
    width: unset;
    gap: var(--gap);

    ${Tag} {
      margin: unset;
    }
  }
`;

export default TagList;
