<template>
  <v-layout>
    <div>
    <v-toolbar color="accent" dark tabs>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          color="accent"
          align-with-title
        >
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <!-- <v-tab key="contato">
            Contato
          </v-tab> -->
          <v-tab key="termos">
            Termos e Condições de Uso
          </v-tab>
          <v-tab key="condicoes">
            Política de Privacidade
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <!-- <v-tab-item key="contato">
        <v-card flat>
          <v-card-text>
            nothing
          </v-card-text>
        </v-card>
      </v-tab-item> -->
      <v-tab-item key="termos">
        <v-card flat>
          <v-card-text>
            <h3>Termos e Condições de Uso</h3>
            <p>1.    Aceitação

              Este é um acordo entre Byselfies.com, o proprietário e operador do site  e do aplicativo Byselfies, e você um usuário do serviço. Ao USAR O SERVIÇO DA BYSELFIES, VOCÊ CONCORDA COM ESTES TERMOS E CONDIÇÕES DE USO E POLÍTICA DE PRIVACIDADE. Se você optar por não concordar com alguns destes termos, você não pode usar o serviço.
            </p>
            <p>
              2.     Byselfies

                Os Termos e Condições de Uso se aplicam a todos os usuários do Byselfies. A comunicação entre usuários Byselfies pode conter links para websites de terceiros que não pertencem e nem são controlados pelo Byselfies.
                Byselfies não assume qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas de qualquer website de terceiros contidos nos links postados nas trocas de mensagens entre usuários. Além disso, Byselfies não vai e não pode censurar ou editar o conteúdo de qualquer site de terceiros. A veracidade dos dados nas ofertas de vagas de emprego ou prestação de serviço de membros através do BySelfies, é de total responsabilidade do anunciante/usuário membro. Ao utilizar o serviço, você reconhece e concorda expressamente que Byselfies não será responsável por quaisquer danos, reclamações ou outras responsabilidades decorrentes de links nas mensagens ou relacionadas ao uso de qualquer site de terceiros provenientes dos links, e também da veracidade de quaisquer informação publicada nas mensagens,  anúncios de vagas de emprego ou prestação de serviços. Desta maneira, cabe ao usuário a exclusiva responsabilidade e os cuidados pertinentes quanto as informações obtidas ou veiculadas dentro da plataforma BySelfies.
            </p>
            <p>
              3.    Byselfies Acesso

              A. Sujeito a sua conformidade com os Termos e Condições de Uso, Byselfies concede a você permissão para usar o serviço, desde que: (I) o seu uso do serviço, conforme permitido, é unicamente para seu uso pessoal, e você não está autorizado a revender ou cobrar os outros por uso ou acesso ao serviço, ou de qualquer outra forma incompatível com os Termos e Condições de Uso;  (II) você não vai duplicar, transferir, dar acesso, copiar ou distribuir qualquer parte do serviço em qualquer meio sem autorização prévia por escrito da Byselfies; (III) você não vai tentar fazer engenharia reversa, alterar ou modificar qualquer parte do serviço; e (IV) você vai agir em conformidade com os Termos e Condições de Uso e Política de Privacidade.

              B. A fim de acessar e usar os recursos do serviço, você imperativamente, deve ter mais de 14 anos de idade e garantir que todas as informações que der na sua inscrição sejam verdadeiras e atualizadas. A inscrição se efetua através do Facebook Connect ou sua conta Google, que permite ao Byselfies utilizar a foto do perfil, primeiro nome e sexo, para lhe preparar uma ficha de "perfil". Em consequência, você deve proceder à verificação da autenticidade de suas informações no Facebook ou na sua conta Google antes de sua inscrição no serviço. Você é o único responsável pelas mensagens que você enviar e o status que são exibidos no serviço Byselfies. Você deve notificar Byselfies imediatamente sobre qualquer violação de segurança ou uso não autorizado de seu smartphone. Byselfies não será responsável por perdas causadas por qualquer uso não autorizado de sua conta, você pode ser responsabilizado pelas perdas do Byselfies ou outros oriundas de tal uso não autorizado.

              C. Você concorda em não usar ou lançar qualquer sistema automatizado, incluindo, sem limitação, "robôs", "apiders", "offline readers", etc., ou "testadores de carga", tais como wget, banco apache, mswebstress, httpload, raio, Xcode Automator, Monkey Android, etc., que acessa o serviço de maneira a enviar mais solicitações aos servidores do Byselfies em um determinado período de tempo, do que seja humanamente possível responder no mesmo período através do serviço Byselfies. Não obstante o acima, você concorda em não utilizar os sistemas de comunicação fornecidos pelo serviço para quaisquer fins de solicitação de spam ou comerciais.
            </p>
            <p>
              4.    Direitos de Propriedade Intelectual

              O projeto Byselfies junto com o texto criado, scripts, imagens, recursos interativos e semelhantes, e as marcas comerciais, marcas de serviço e logos ali contidos ("Marcas"), são de propriedade da ou licenciadas para Byselfies, sujeito a direito de autoria e outros direitos de propriedade intelectual no Brasil e nas leis estrangeiras e convenções internacionais. O serviço é fornecido a você COMO ESTÁ para sua informação e uso pessoal. Você concorda em não participar do uso, cópia ou distribuição de qualquer parte do serviço que não seja expressamente permitido, incluindo material do status de terceiros obtidos através do serviço para quaisquer fins comerciais.
            </p>
            <p>
              5.    Status do Usuário e veiculação de anúncio

              A. Byselfies permite aos usuários enviar mensagens de texto, bem como a apresentação automática de seu status de "visto pela última vez" (coletivamente, "Submissões de status"). Estas inscrições de status podem ser hospedadas, compartilhadas e / ou publicada como parte do serviço Byselfies, e pode ser visível para outros usuários do serviço, exceto se você desabilitar a sua localização.
              Para maior clareza, as mensagens que você envia diretamente para outros usuários Byselfies só serão visíveis por aqueles usuários Byselfies ou grupo (s) que você enviar diretamente tais informações; Byselfies não garante a confidencialidade em relação a quaisquer submissões. O seu status perfil de usuário é exposto a outros usuários Byselfies dentro do limite de cruzamento do georreferenciamento, sempre que a sua localização estiver habilitada.

              B. Você será o único responsável por seu material de status e as consequências de publicar ou publicá-los. Porque Byselfies age apenas como um repositório de dados, e Byselfies não faz nenhuma garantia quanto à validade, precisão ou status legal de qualquer usuário.

              C. Em relação ao material de status e veiculação de anúncios, você também concorda que não vai: (I) enviar material protegido por direitos autorais, protegido por segredo comercial, direitos de propriedade, incluindo os direitos de privacidade e publicidade de outros ou sujeitos a terceiros, a menos que você seja o proprietário de tais direitos ou tenha permissão do seu legítimo proprietário para publicar o material e ceder a Byselfies todos os direitos de licença aqui concedidos; (II) publicar falsidades ou deturpações que possam prejudicar usuários Byselfies ou qualquer terceiro; (II) enviar material que seja ilegal, obsceno, difamatório, calunioso, ameaçador, ofensivo, odioso, racial ou etnicamente ofensivo, ou incentivem a conduta que possa ser considerada uma ofensa criminal, dar origem a responsabilidade civil, violar qualquer lei, ou é o contrário inadequado; (IV) postar anúncios não relacionadas a proposta ou solicitações de negócios fora do contexto proposto; (V) se passar por outra pessoa; (VI) enviar, publicar ou armazenar material que contenha vírus de software, worms, cavalos de Tróia ou outro código nocivo, arquivos, scripts, agentes ou programas; (VII) interferir ou interromper a integridade ou o desempenho do serviço ou os dados nele contidos; ou (VIII) tentar obter acesso não autorizado ao serviço ou seus sistemas ou redes relacionados.

              D. Conteúdo adulto deve ser identificado como tal. O Byselfies não endossa nenhum status, publicação ou qualquer opinião, recomendação ou conselho ali expresso, e Byselfies renuncia expressamente toda e qualquer responsabilidade em relação ao material de status ou publicação realizada. O Byselfies não permite atividades que violem direitos autorais e violação de direitos de propriedade intelectual, através do seu serviço, e Byselfies removerá todo o conteúdo e status se devidamente notificado de que tal conteúdo ou status seja uma violação de propriedade intelectual. Para registrar uma notificação de violação de direitos autorais, por favor, enviar uma comunicação escrita que inclua substancialmente o seguinte (veja a Seção 512 (c) (3) da Lei de Direitos Autorais do Milênio Digital): (I) Uma assinatura física ou eletrônica da pessoa autorizada a agir em nome do proprietário de um direito exclusivo alegadamente violado; (II) Identificação da obra que alega ter sido violada, ou, se vários trabalhos em um único site online forem abrangidos por uma única notificação, uma lista representativa de tais trabalhos; (III) identificação do material que é tido como violado ou para ser objeto de atividade ilícita e que está a ser removido ou cujo acesso deve ser desativado e informações razoavelmente suficientes para permitir ao provedor de serviço localizar o material, incluindo perfil do usuário Byselfies supostamente infringir o trabalho protegido por direitos autorais; (IV) Informações razoavelmente suficientes para permitir que o provedor de serviços possa contatar a parte reclamante, tal como endereço, número de telefone e, se disponível, um endereço de correio eletrônico em que a parte reclamante possa ser contatada; (V) Uma declaração de que a parte reclamante tem uma crença de boa fé que a utilização do material da forma reclamada não está autorizada pelo proprietário dos direitos autorais, seu agente ou pela lei; e (VI) Uma declaração de que as informações contidas na notificação são precisas e sob pena de perjúrio, que a parte reclamante está autorizada a agir em nome do proprietário de um direito exclusivo que supostamente está sendo infringido. Tais observações podem ser enviadas para apoiar a Byselfies.com. Byselfies reserva-se o direito de remover  conteúdo e status sem prévio aviso. Byselfies também pode cancelar o acesso de um usuário para o serviço, se eles estão determinados a ser um infrator reincidente ou infringir os Termos e Condições de Uso. Um infrator reincidente é um usuário que tenha sido notificado da atividade infratora uma ou mais vez e / ou teve um status removido do serviço mais do que uma vez. Byselfies também se reserva o direito de decidir se o conteúdo ou a status é apropriado e obedece os Termos e Condições de Uso para fins de violação de direitos autorais e violações do direito de propriedade intelectual, mas não limitados a duração excessiva ou interesse limitado. Byselfies pode remover tais materiais e / ou cancelar o acesso de um usuário por enviar tais materiais que violem os Termos e Condições de Uso a qualquer momento, sem prévio aviso e a seu exclusivo critério.

              E. Você entende que ao utilizar o serviço Byselfies, o material do status a partir de uma variedade de fontes, e que Byselfies não é responsável pela precisão, utilidade, segurança ou direitos de propriedade intelectual ou relacionadas a esse material de status, e que tais submissões de status não são da responsabilidade do Byselfies. Você entende e reconhece que poderá ser exposto a submissões de status que são imprecisos, ofensivos, indecentes, ou censuráveis, e você concorda em renunciar, e decide fazer renunciar, quaisquer direitos legais que você tem ou pode ter contra Byselfies com esse respeito.

              F. Byselfies permite que você se conecte aos serviços apenas para fins pessoais. Byselfies reserva-se o direito de descontinuar qualquer aspecto do serviço a qualquer momento.
            </p>
            <p>
              6.    Isenção de Garantia

              Você concorda que o uso do Byselfies será por sua conta e risco. Até ao limite máximo permitido por lei. Byselfies, seus executivos, diretores, funcionários e representantes negam todas as garantias, expressa ou implícita, em conexão com o serviço e sua utilização dos mesmos. Byselfies não garante nem se responsabiliza pela precisão ou integralidade do conteúdo de serviço e não assume responsabilidade por quaisquer (I) erros ou imprecisões, (II) danos pessoais ou danos materiais, de qualquer natureza, resultante do acesso e uso de nosso serviço, (III) qualquer acesso ou uso de nossos servidores e / ou toda e qualquer informação pessoal e / ou financeira ali armazenada, (IV) qualquer interrupção ou cessação de transmissão, ou para nosso serviço, qualquer bug, vírus, cavalos de tróia ou afins que possam ser transmitidos, ou através do nosso serviço e ações de qualquer terceiro, e/ou (V) quaisquer erro ou omissão, qualquer conteúdo ou qualquer perda, ou danos de qualquer natureza sofrido como resultado do uso de conteúdo postado, transmitido ou de outra forma disponibilizado através do Byselfies. Byselfies não garante, endossa, ou assume responsabilidade por qualquer produto, ou serviço divulgado, ou oferecido por terceiros. Byselfies não será responsável por monitorar qualquer transação entre você e usuários que ofereçam produtos ou serviços nas mensagens. Como se faz na compra de um produto ou serviço por qualquer meio ou em qualquer ambiente, você deve usar seu melhor julgamento e ter cautela quando apropriado. E novamente, usar este apenas para sua rede social,  entretenimento e trabalho.
            </p>
            <p>
              7.    Limitação de Responsabilidade

              Em nenhuma hipótese a Byselfies, seus gerentes, diretores, empregados, ou agentes, será responsável para com você por qualquer dano direto, indireto, acidental, especial, punitivo ou consequente resultante de quaisquer (I) erros ou imprecisões, (II) danos pessoais ou danos materiais, de qualquer natureza, resultante do acesso e uso dos nossos serviços, (III) qualquer acesso ou uso de nossos servidores seguros e / ou toda e qualquer informação pessoal e / ou informação financeira armazenada neles, (IV) qualquer interrupção ou cessação de transmissão de ou para nossos servidores, (V) qualquer bug, vírus, cavalos de tróia ou afins que possam ser transmitidos por terceiros através do nosso serviço, (VI) qualquer erro ou omissão em qualquer conteúdo ou qualquer perda ou dano de qualquer natureza sofrido como resultado do uso de qualquer conteúdo postado, transmitido ou de outra forma disponibilizado através do usuário Byselfies, seja com base em garantia, contrato, delito ou qualquer outra teoria legal, e independentemente de a empresa ser avisado sobre a possibilidade de tais danos e / ou (VII) a divulgação de informações de acordo com os Termos e Condições de Uso e Política de Privacidade. A limitação de responsabilidade será aplicada ao máximo permitido por lei na jurisdição competente.
              Você especificamente reconhece que Byselfies não será responsável pelo material difamatório, ofensivo ou ilegal de terceiros, falsidade e que o risco de dano ou prejuízo do precedente é inteiramente seu.
              O serviço é controlado e oferecido pelo Byselfies a partir de suas instalações no Brasil. Byselfies não faz declarações que o serviço Byselfies é apropriado ou disponível para uso em outras localidades. Aqueles que acessarem ou usarem o serviço By Selfies de outras jurisdições, o fazem por sua própria vontade e são responsáveis pelo cumprimento da legislação local.
            </p>
            <p>
              8.  Indenização

              Você concorda em se defender e indenizar Byselfies, seus administradores, diretores, funcionários e agentes, de e contra todas e quaisquer reivindicações, danos, obrigações, perdas, responsabilidades, custos ou dívidas, e despesas (não se limitando a honorários advocatícios) oriundos de: (I) seu uso e acesso ao serviço Byselfies; (II) violação de qualquer cláusula do Termo e Condições de Uso; (III) violação de qualquer direito de terceiros, incluindo, sem limitação, qualquer direito autoral, propriedade ou de privacidade; ou (IV) qualquer alegação de que uma de suas submissões de status ou anúncio causou danos a um terceiro. Tal obrigação de defesa e indenização subsistirá a Termos e Condições de Uso e ao uso do Byselfies.
            </p>
            <p>
              9.  Capacidade de Aceitar o Termo de Serviço

              Você afirma que tem 14 anos de idade ou mais, ou é um menor emancipado, ou possui o consentimento dos pais ou tutor legal, e é totalmente capaz e competente para celebrar os termos, condições, obrigações, afirmações, representações e garantias estabelecidas nos Termos e Condições de Uso, e de respeitar e cumprir os presentes termos. Em qualquer caso, você afirma que tem pelo menos 14 anos de idade e como o Byselfies não é destinado a crianças com menos de 14. Se você tem menos de 14 anos de idade, você não está autorizado a utilizar o Byselfies.

            </p>
            <p>
              10.  Restrição de uso

              A. Usuários denunciados por infração cometidas contidas nos itens acima, poderão sofrer bloqueio temporário ou definitivo dependendo da gravidade e reincidência.

              B. Conteúdos infracionais poderão ser excluídos sem aviso prévio e poderá restringir o usuário ao uso do aplicativo.

              C. Byselfies disponibilizará recurso para denunciar usuários que cometerem abusos e/ou cometerem infrações dos Termos de Uso.
            </p>
            <p>
              11.  Atribuição

              Estes Termos e Condições de Uso e quaisquer direitos e licenças concedidas aqui, não poderão ser transferidos ou cedidos por você, mas pode ser atribuído pelo Byselfies sem restrição.
            </p>
            <p>
              12.  Geral

              Você concorda que: (I) Byselfies será considerado exclusivamente com base no Brasil; (II) o Byselfies será considerado um servidor passivo que não dá margem à jurisdição pessoal, específicos ou gerais, em outras jurisdições que não a de Brasília; e (III) que você concorda em submeter-se à jurisdição de Brasília, em caso de qualquer disputa legal. Estes Termos e Condições de Uso serão regidos pelas leis substantivas internas do Brasil, sem respeito aos seus conflitos de princípios legais. Qualquer reclamação ou disputa entre você e Byselfies que surge no todo ou em parte do serviço Byselfies serão decididas exclusivamente por um tribunal de jurisdição competente localizado em Brasília, Brasil. Estes Termos e Condições de Uso, juntamente com a Política de Privacidade e quaisquer outros avisos legais publicados pelo Byselfies, incluindo, mas não limitado a um acordo de licença do usuário final, constitui um acordo entre você e o Byselfies relativa ao serviço prestado pela Byselfies.
              Se qualquer disposição do Termos e Condições de Uso for considerada inválida por um tribunal de jurisdição competente, a invalidade de tal disposição não afetará a validade das restantes disposições destes Termos e Condições de Uso, que permanecerão em pleno vigor e efeito. BysSelfies reserva-se o direito de alterar ou modificar o Termos e Condições de Uso a qualquer momento, e é sua a responsabilidade de rever estes Termos e Condições de Uso para quaisquer alterações. Se você não concordar com os termos revisados, seu único recurso é interromper o uso do Byselfies. Seu uso continuado do Byselfies na sequência de qualquer alteração destes Termos e Condições de Uso implicará no consentimento e na aceitação dos termos revisados. Você e Byselfies concordam que qualquer causa de ação decorrente ou relacionada ao Byselfies deve começar dentro de um (1) ano após a causa da ação. Caso contrário, tal causa de ação será permanentemente proibida.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item key="condicoes">
        <v-card flat>
          <v-card-text>
            <h4>Política de Privacidade</h4>
              <p>
                Byselfies.com reconhece que os seus clientes, visitantes e usuários, querem saber o que está acontecendo com a privacidade. Byselfies fornece esta política de privacidade para ajudá-lo a tomar uma decisão informada sobre se deve usar ou continuar usando o site Byselfies, aplicativo Byselfies e / ou dos serviços Byselfies. Se você não concorda com nossas práticas, favor não usar o site Byselfies, aplicativo Byselfies, ou serviços Byselfies.
                Esta Política de Privacidade está incorporada e está sujeito aos Termos e Condições de Uso Byselfies. Seu uso dos nossos serviços e qualquer informação pessoal que você fornecer, permanece sujeita aos termos desta Política de Privacidade.
                Por favor, note que quaisquer envios de status ou outro conteúdo postado torna-se conteúdo publicado e não é uma informação pessoal identificável e está sujeita a esta Política de Privacidade.
              </p>
              <p>
                O que a Política de Privacidade cobre

                Esta Política de Privacidade é parte dos Termos e Condições de Uso do Byselfies e abrange o tratamento de informações do usuário, incluindo informações de identificação pessoal, obtida por Byselfies, incluindo informações obtidas quando você acessar o site do Byselfies, utilizar os Serviços Byselfies ou qualquer outro software fornecido pelo Byselfies.
                Esta Política de Privacidade não se aplica às práticas de empresas que Byselfies não seja proprietário ou controle.
              </p>
              <p>
                Que informação Byselfies Coleta
                Byselfies pode obter os seguintes tipos de informações apresentadas por você ou seu aparelho de telefone móvel, que podem incluir informações que podem ser usadas para identificá-lo conforme especificado abaixo ("Informações de Identificação Pessoal"):
                Os dados coletados pelo Byselfies são necessários para a operação correta e melhoria do serviço proposto pelo aplicativo.
                Byselfies coleta os dados a partir do Facebook ou Google para simplificar o processo de login.
                No aplicativo, você tem a opção de substituir a foto realizando uma selfie ou de um arquivo salvo no aparelho e complementar informações pessoais. Por motivos de transparência, as fotos publicadas devem representar você e não devem ser enganosas para os outros. Essas fotos não podem representar nem uma pessoa famosa nem representar uma mensagem racista, chocante, ilegal ou sexual. As fotos são publicadas no aplicativo sob sua exclusiva responsabilidade. Ao se tornar um membro, você aceita a publicação das suas fotos no aplicativo. Os outros dados pessoais que você pode adicionar no seu perfil não são obrigatórios e podem ser inseridos na configuração do seu perfil e sob sua exclusiva responsabilidade. Em todos os casos, o endereço de e-mail, não devem ser visíveis ou disponíveis ao público.
              </p>
              <p>
                Dados de local (georreferenciamento)

                O Byselfies tem como propósito principal e vocação permitir que os usuários encontrem as pessoas que estão próximas e facilitar amizades da vida virtual ou real, além de vagas de empregos e prestadores de serviços. Será pedida permissão ao usuário para coletar e processar seu georreferenciamento e permitir que o Byselfies identifique os pontos de cruzamento com outros usuários que aceitaram o georreferenciamento. O Byselfies não rastreia os movimentos e/ou itinerário dos seus usuários e apresenta apenas os pontos de cruzamento solicitados pelos usuários. A posição exata do usuário não está disponível aos outros usuários, apenas uma distância aproximada. O usuário é livre para retirar seu consentimento a qualquer momento, e desativar a tecnologia de georreferenciamento no seu smartphone. Ao fazer isso, posicionamento do usuário não é mais atualizada e não pode ver os outros usuários que estão nas proximidades. Para anúncios de vagas de empregos ou prestação de serviços, é possível apagar o anúncio a qualquer tempo diretamente no aplicativo.
              </p>
              <p>
                As informações não colhidas pelo Byselfies

                O Byselfies não coleta nomes, e-mails, endereços ou outras informações de contato a partir da lista de contatos. Nós colhemos dados de cadastro e posteriormente a localização para um recurso específico que você terá a possibilidade habilitar ou desabilitar através do aplicativo Byselfies.
                O conteúdo das mensagens que foram entregues pelo Byselfies serão mantidos ou arquivados no prazo exigido por lei no curso normal dos negócios, exceto as mensagens apagadas pelos usuários Byselfies. Os usuários digitam as mensagens e são enviados via serviço de dados para os nossos servidores e encaminhadas para o destinatário (que também deve ser um usuário Byselfies), se esse destinatário estiver online. Se o destinatário não estiver online, a mensagem não entregue é mantida no servidor do Byselfies até que possa ser entregue. Se a mensagem não for entregue no prazo de cento e oitenta (180) dias, ela poderá ser apagada dos nossos servidores. Não obstante o acima, Byselfies pode reter data e hora das informações associadas a mensagens entregues com sucesso, bem como qualquer outra informação que Byselfies é legalmente obrigado a recolher.
              </p>
              <p>
                Como o Byselfies usa as informações

                Se você enviar informações pessoais para nós por meio do Site ou aplicativo Byselfies, usamos as suas informações pessoais e impessoais para operar, manter e fornecer os recursos e funcionalidades ao aplicativo Byselfies. Nós não usamos o seu email ou outras informações pessoais para enviar mensagens comerciais ou de marketing sem o seu consentimento, exceto como parte de um programa ou recurso específico para melhorar a qualidade e o design do Byselfies, e para criar novos recursos, promoções, funcionalidade e serviços, analisar as preferências e tendências do usuário. Podemos usar cookies e log de informações de arquivo para: (A) lembrar-lhe de informações para que você não tenha que digitá-las novamente durante sua visita ou da próxima vez que utilizar o aplicativo ou o site Byselfies; (B) fornecer conteúdos personalizados e informação e (C) monitorar indicadores individuais e agregados, como o número total de visitantes, páginas exibidas, etc.
              </p>
              <p>
                Quando Byselfies divulga informações

                Nós não vendemos ou compartilhamos suas informações pessoais (tais como nome, sexo, idade, e-mail, profissão e sobre você) com outras empresas para uso comercial ou de marketing sem o seu consentimento, exceto como parte do programa ou recurso específico para o qual você terá a capacidade de aceitar ou recusar. Byselfies também se reserva o direito de divulgar informações pessoais para ajudar as agências de aplicação de governo quando solicitadas, para proteger a segurança ou integridade do Byselfies, dos nossos servidores, e para proteger os direitos de propriedade ou segurança pessoal de nossos usuários ou outros.
              </p>
              <p>
                Suas escolhas

                Você pode, é claro, se negar a dar informações pessoais através do aplicativo ou site Byselfies, caso em que Byselfies pode não ser capaz de fornecer determinados serviços para você. Se você não concorda com a nossa Política de Privacidade ou Termos e Condições de Uso, por favor, desinstale o aplicativo móvel Byselfies e interrompa o uso dos serviços Byselfies; o seu uso continuado implicará o consentimento e a aceitação de nossa Política de Privacidade e Termos e Condições de Uso. Entre em contato com Byselfies caso tenha dúvidas sobre a Política de Privacidade.
              </p>
              <p>
                Anúncios e links para outros sites

                Apenas aos vinculados a publicidade Admob(Google).
                </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    </div>
  </v-layout>
</template>

<style lang="stylus">
/* .no-absolute { position: !relative; } */
</style>

<script>
export default {
  name: 'Conditions',
  components: {
  },
  data: () => ({
    tab: null
  })
  // props: ['image', 'title', 'text']
}
</script>
