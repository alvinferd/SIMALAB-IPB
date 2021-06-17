import Link from "next/link";
import { Box, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { LabButton } from "@/components/inputs/LabButton";

const useStyles = makeStyles((theme) => ({
  col: {
    textAlign: "left",

    paddingBottom: theme.spacing(1.5),
    borderBottom: "1px solid #DFDFDF",
  },
}));

function LabTable({ data, column, widthColumn }) {
  const classes = useStyles();
  return (
    <Box width="100%">
      <table>
        {widthColumn.map((width) => {
          return (
            <colgroup>
              <col width={width} />
            </colgroup>
          );
        })}
        <thead>
          <tr>
            {column.map((item) => {
              return (
                <th className={classes.col}>
                  <Typography variant="h4" component="span">
                    <b>{item}</b>
                  </Typography>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  {item.map((text, index) => {
                    if (index < item.length - 1)
                      return (
                        <td style={{ padding: "8px 0" }}>
                          <Typography
                            color={
                              text === "Ditinjau" ? "error" : "textPrimary"
                            }
                            style={
                              text === "Disetujui" ? { color: "#7DBE6D" } : null
                            }
                          >
                            {index === item.length - 2 ? <b>{text}</b> : text}
                          </Typography>
                        </td>
                      );
                  })}
                  <td style={{ padding: "8px 0" }}>
                    <LabButton size="small">
                      <Link
                        href={{
                          pathname: "pinjam-lab/tinjau-request",
                          query: { id: item.at(-1) },
                        }}
                      >
                        Tinjau
                      </Link>
                    </LabButton>
                  </td>
                </tr>
              </>
            );
          })}
          <tr style={{ borderBottom: "1px solid black" }}></tr>
        </tbody>
      </table>
    </Box>
  );
}

export default LabTable;
