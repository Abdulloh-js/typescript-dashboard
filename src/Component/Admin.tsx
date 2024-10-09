import { Button, Sheet, Table, Typography } from "@mui/joy";


import { TaybleProps } from "./Mock";
import DrawerMobileNavigation from "./Navigate/Navigate";

const Admin = (props: TaybleProps) => {
  return (
    <div style={{ padding: "2%" }}>
      <div> <DrawerMobileNavigation />
        <Typography
          sx={{
            fontSize: 44,
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Motor
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
          Motor Data List
        </Typography>

        
      </div>
      <Sheet
        variant="outlined"
        sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
      >
        <Table aria-labelledby="tableTitle" hoverRow>
          <thead style={{ padding: "20px 0" }}>
            <tr>
              <th>No</th>
              <th>Motor Name</th>
              <th>Year</th>
              <th>Location</th>
              <th>Brand</th>
              
              
              <th>License</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {props.datas.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.car.BrandName}</td>
                  <td>{value.car.Dates}</td>
                  <td>{value.car.place}</td>
                  <td>{value.car.company}</td>
                  
                  <td>{value.car.license}</td>
                  <td>{value.car.Cost}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
};

export default Admin;
