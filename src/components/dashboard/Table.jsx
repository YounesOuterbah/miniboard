import { rows } from "../../data/Table";

export const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>DATE</th>
          <th>SALARY</th>
          <th>AGE</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item) => (
          <tr key={item.id}>
            <td>
              {item.name}
              <p>{item.designation}</p>
            </td>
            <td>{item.email}</td>
            <td>{item.date}</td>
            <td>{item.salary}</td>
            <td>{item.age}</td>
            <td className="status" style={{ background: `${item.color}` }}>
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
