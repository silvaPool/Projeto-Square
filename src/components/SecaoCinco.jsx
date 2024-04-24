import { Box } from "@mui/material";

function SecaoCinco() {
  return (
    <>
      <Box sx={{ width: '50vw', margin: '0 auto'}}>
        <div class="form-container">
          <div class="form">
            <span class="heading">Pronto para levar seu setup para o próximo nível?</span>
            <input placeholder="Name" type="text" class="input" />
            <input placeholder="Email" id="mail" type="email" class="input" />
            <input placeholder="Telefone" id="tel" type="text" class="input" />
            <div class="button-container">
              <div class="send-button">Reservar agora</div>
              {/* <div class="reset-button-container">
                <div id="reset-btn" class="reset-button">
                  Reset
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default SecaoCinco;
