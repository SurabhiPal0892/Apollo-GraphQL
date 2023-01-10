import { useQuery } from "@apollo/client";
import {Table} from "react-bootstrap";
import { ClientRow } from "./ClientRow";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { SpinnerLoader } from "../common/Spinner";

export function ClientsTable() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <SpinnerLoader/>;
  if (error) return <p>error....</p>;

  return <>{!loading && !error && 
    <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {data?.clients.map(d=>{
       return <ClientRow key={d.id} client={d}/>
    })}
  </tbody>
</Table>
    </>
}
  </>;
}
