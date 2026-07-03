const fotos = document.getElementById("fotos");
const preview = document.getElementById("preview");

if (fotos) {
    fotos.addEventListener("change", function () {

        preview.innerHTML = "";

        Array.from(this.files).forEach(file => {

            const leitor = new FileReader();

            leitor.onload = function (e) {

                const img = document.createElement("img");
                img.src = e.target.result;
                preview.appendChild(img);

            };

            leitor.readAsDataURL(file);

        });

    });
}

function enviarWhatsapp(){

    const nome=document.getElementById("nome").value.trim();
    const telefone=document.getElementById("telefone").value.trim();
    const endereco=document.getElementById("endereco").value.trim();
    const descricao=document.getElementById("descricao").value.trim();

    if(nome==="" || telefone==="" || endereco===""){

        alert("Preencha Nome, Telefone e Endereço.");

        return;

    }

    let mensagem=`🌿 *NOVO PEDIDO DE ORÇAMENTO*

👤 Nome: ${nome}

📞 Telefone: ${telefone}

📍 Endereço:
${endereco}

📝 Serviço solicitado:
${descricao}

📷 As fotos serão enviadas após esta mensagem.`;

    const numero="5521991960469";

    window.open(
        "https://wa.me/"+numero+"?text="+encodeURIComponent(mensagem),
        "_blank"
    );

}
