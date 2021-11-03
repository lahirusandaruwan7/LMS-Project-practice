import styled from "styled-components";

const StyledTable = styled.table`
border: none;
border-collapse: separate;
td,
th{
    border:1px solid;
}

td {
  padding: 5px 10px;
}
tbody tr {
  :nth-of-type(even) {
    background-color: #efefef;
  }
  :hover {
    background-color: lightpink;
  }
}
thead > tr {
  background-color: #c2c2c2;

}
 

`;
const TableMarkup = ({ titles, data }) => (
  <StyledTable>

    <colgroup>
      {titles.map((title, index) => (
        <col key={index} />
      ))}
    </colgroup>

    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}

      </tr>

    </thead>
    <tbody>
  
        {data.map((item, index) => (
          <tr key={index}>
            {titles.map((title, index) => (
              <td key={index}>{item[title]}</td>
            ))}
          </tr>
        ))}
     
    </tbody>
  </StyledTable>
);

const Table = ({ data }) => {
  return Object.keys(data).length !== 0 ? (
    <TableMarkup titles={Object.keys(data[0])} data={data} />
  ) : (
    "No data Populate"
  );
};

export default Table;
