import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

export function SubmissionPage() {
  //if there is an id we display ChallengeInfo, if not display NewSubmissionInfo
  const {} = useParams();

  return (
    <Container>
      <Stack direction="row">
        <Box>
          <CodeMirror
            value={"//your code hereeee"}
            height="100vh"
            width="50vw"
            lang="javascript"
            theme="dark"
            onChange={(value, viewUpdate) => {
              console.log("value:", value);
              console.log("viewUpdate: ", viewUpdate);
            }}
          />
        </Box>
        <Box width="50vw"></Box>
      </Stack>
    </Container>
  );
}
