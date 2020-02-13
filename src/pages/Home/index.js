import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/82/COL-6981-982/COL-6981-982_detalhe1.jpg"
          alt="Tênis"
        />
        <strong>
          Tênis muito legal com o título muito grande para deixar os botões
          sempre alinhados
        </strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/82/COL-6981-982/COL-6981-982_detalhe1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/82/COL-6981-982/COL-6981-982_detalhe1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/82/COL-6981-982/COL-6981-982_detalhe1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/82/COL-6981-982/COL-6981-982_detalhe1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="//static.netshoes.com.br/produtos/tenis-adidas-run-falcon-masculino/82/COL-6981-982/COL-6981-982_detalhe1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
