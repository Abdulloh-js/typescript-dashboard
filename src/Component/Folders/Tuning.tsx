import { Button, Sheet, Table, Typography } from "@mui/joy";
import { TuningProps, TaybleProps, UsedProps } from "../Mock";
import DrawerMobileNavigation from "../Navigate/Navigate";




const TuningComponent = (props: TuningProps) => {
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
          Tuning
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
              <th>Car Name</th>
              <th>Brand Name</th>
              <th>Cost</th>
              <th>Company</th>
              
              
              
            </tr>
          </thead>
          <tbody>
            {props.tuning.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.car.CarName}</td>
                  <td>{value.car.BrandName}</td>
                  <td>{value.car.Cost}</td>
                  <td>{value.car.company}</td>
                  
                 
                  
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
};

export default TuningComponent;
