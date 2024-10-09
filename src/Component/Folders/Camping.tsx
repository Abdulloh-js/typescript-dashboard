import { Button, Sheet, Table, Typography } from "@mui/joy";




import { CampingProps } from "../Mock";
import DrawerMobileNavigation from "../Navigate/Navigate";

const CampingComponent = (props: CampingProps) => {
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
          Camping Places
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
              <th>Location</th>
              <th>People</th>
              <th>License</th>
              
              
              
            
            </tr>
          </thead>
          <tbody>
            {props.camping.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.camping.location}</td>
                  <td>{value.camping.people}</td>
                  <td>{value.camping.license}</td>
                  
                  
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
};

export default CampingComponent;
