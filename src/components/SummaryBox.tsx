import { ISummary } from '../data/summary';
import { Stack, Paper, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const SummaryBox = ({ icon, title, amount, isUp, percent, hexColor }: ISummary) => {

    return (
        <Stack
            direction="row"
            sx={{
                borderRadius: "10px",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                padding: "10px",
                boxShadow: '0px 3px 6px #d3d2d2',
            }}
        >
            <Paper
                sx={{
                    width: { md: "100px", xl: "130px" },
                    height: { md: "100px", xl: "130px" },
                    background: `${hexColor}`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px"
                }}
            >
                {icon}
            </Paper>
            <Stack
                direction="column"
                sx={{
                    margin: "0px 5px 0px 15px"
                }}
            >
                <Typography
                    sx=
                    {{
                        fontSize: "10px",
                        margin: "0px",
                        color: "#D5D5D5",
                        fontWeight: "bold"
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "20px",
                        margin: "0px",
                        fontWeight: "bold",
                        color: "black"
                    }}
                >
                    <span>&#36;</span>{amount}K
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >

                    {isUp ?
                        (
                            <ArrowUpwardIcon
                                sx={{
                                    fontSize: "10px",
                                    margin: "0px",
                                    fontWeight: "bold",
                                    color: "#00A845"
                                }}
                            />
                        )
                        :
                        (
                            <ArrowDownwardIcon
                                sx={{
                                    fontSize: "10px",
                                    margin: "0px",
                                    fontWeight: "bold",
                                    color: "#D42D5E"
                                }}
                            />
                        )
                    }
                    <Typography
                        sx={{
                            color: isUp ? "#00A845" : "#D42D5E",
                            fontSize: "10px",
                            margin: "0px",
                            fontWeight: "bold",
                        }}>
                        {percent}&#37;&nbsp;

                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "10px",
                            margin: "0px",
                            fontWeight: "bold",
                            color: "#87898C",
                        }}
                    >
                        this month
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default SummaryBox;