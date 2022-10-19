export interface RespuestaTopHeadlines {
    status: string;
    totalResults: number;
    articles: Article[];
  }
  
  export interface Article {
    
    nombre: string;
    comentarios: string;
    fecha: Date;
    irrenunciable: string;
    tipo: string;
    
  }
  
  export interface Source {
    id?: string;
    name: string;
  }


   