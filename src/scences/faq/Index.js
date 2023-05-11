import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions Page' />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your Favorite question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Some Random question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ