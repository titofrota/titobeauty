import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons'



class Main extends Component {
	render() {
		return (
			<main>
				<div className="main">
					<div class="container">
						<div class="row align-items-center">
							<div class="co col-lg-auto">
								<br />
								<br />
								<div class="card">
									<div class="card-body">
										<b>FAÇA PARTE DA REVOLUÇÃO</b>
										<br />
										<br />
										<form>
											<div class="form-group">
												<label for="inputName">Como você se chama?</label>
												<input
													type="name"
													class="form-control"
													id="inputName"
													placeholder="Seu nome e sobrenome"
												/>
											</div>
											<div class="form-group">
												<label for="inputEmail1">Qual é o seu e-mail?</label>
												<input
													type="email"
													class="form-control"
													id="inputEmail1"
													aria-describedby="emailHelp"
													placeholder="O seu e-mail mais bonito"
												/>
												<small id="emailHelp" class="form-text text-muted">
													Prometemos não lotar a sua caixa de entrada ;)
												</small>
											</div>
											<div class="form-group">
												<label for="inputName">Quando você nasceu?</label>
												<input
													type="name"
													class="form-control"
													id="inputName"
													placeholder="DD/MM/AAAA"
												/>
											</div>
											<div class="form-group">
												<label for="inputName">
													Como você conheceu a marca?
												</label>
												<input
													type="name"
													class="form-control"
													id="inputName"
													placeholder="Ex: instagram"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-secondary btn-register"
											>
												CONHEÇA A LINHA COMPLETA
											</button>
										</form>
									</div>
								</div>
							</div>
							<div class="col col-md-2">
								<br />
								<br />
								<img src="/images/products01.png" class="products" />
							</div>
						</div><br/><br/><br/>
						<div class="row d-flex justify-content-between">
							<div class="col-lg-4 text-center">
								<p class="text-white mb-4">
              <FontAwesomeIcon icon={faSeedling} size="3x" /><br/>
									<b>VEGAN</b><br/> Todos os nossos produtos são 100% veganos!
								</p>
							</div>
							<div class="col-lg-4 text-center">
								<p class="text-white mb-4">
              <FontAwesomeIcon icon={faPaw} size="3x" /><br/>
									<b>CRUELTY-FREE</b> <br/>Não realizamos testes em animais
								</p>
							</div>
							<div class="col-lg-4 text-center">
								<p class="text-white mb-4">
              <FontAwesomeIcon icon={faEyeDropper} size="3x" /><br/>
									<b>INCLUSIVA</b> <br/>Nossa cartela de cores é definida estratégicamente
                  para atender do tom mais claro até o mais retinto
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default Main;

{
	/* <div className="container">
<div class="row ">
  <div class="col col-md-auto">A PRIMEIRA LINHA DE MAQUIAGENS TITOBEAUTY</div>
  <div class="col">
    <br/><br/>
    <div className="products"></div>
</div>
</div>
</div> */
}
