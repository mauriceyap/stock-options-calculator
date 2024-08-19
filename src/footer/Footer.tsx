import { GitHub } from "@mui/icons-material";
import { Container, Link, Typography, styled } from "@mui/material";

import { contributors } from "../config/contributors";

const FooterContentContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    my: 2,
    display: "flex",
    gap: 2,
    justifyContent: "space-between",
  })
);

export const Footer = () => (
  <Container maxWidth="lg" component="footer">
    <FooterContentContainer>
      <div>
        <Typography paragraph color="text.secondary" variant="body2">
          Created by{" "}
          <Link href="https://linked.in/in/mauriceyap">Maurice Yap</Link>.
        </Typography>
        {contributors.length > 0 && (
          <Typography paragraph color="text.secondary" variant="body2">
            Additional contributions by:
            <ul>
              {contributors.map(({ name, href }) => (
                <li key={name}>
                  {href === undefined ? name : <Link href={href}>{name}</Link>}
                </li>
              ))}
            </ul>
          </Typography>
        )}
      </div>
      <div>
        <Typography paragraph color="text.secondary" variant="body2">
          <Link href="https://github.com/mauriceyap/stock-options-calculator">
            View and contribute to this project on GitHub
          </Link>{" "}
          <GitHub fontSize="inherit" />
        </Typography>
      </div>
    </FooterContentContainer>
  </Container>
);
