import styles from './CategoryBarChart.module.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CategoryBarChart({ projects }) {

    const categories = ['Infra', 'Desenvolvimento', 'Designer', 'Planejamento'];

    // Lógica para agrupar
    const data = categories.map(cat => {
        const filtered = projects.filter(p => p.category && p.category.name === cat);
        return {
            name: cat,
            Orçamento: filtered.reduce((acc, p) => acc + parseFloat(p.budget || 0), 0),
            Gasto: filtered.reduce((acc, p) => acc + parseFloat(p.cost || 0), 0)
        };
    });

    // --- FUNÇÃO MÁGICA DE FORMATAÇÃO ---
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    return (
        <div className={styles.chart_container}>
            <h3>Investimento por Categoria</h3>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                    
                    <XAxis dataKey="name" stroke="#ccc" tick={{fill: '#ccc'}} />
                    
                    {/* YAxis formatado e com largura maior para caber os milhões */}
                    <YAxis 
                        stroke="#ccc" 
                        tick={{fill: '#ccc'}} 
                        tickFormatter={formatCurrency} 
                        width={120} 
                    />
                    
                    {/* Tooltip formatado */}
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#222', border: '1px solid #444', borderRadius: '5px' }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{fill: '#333'}}
                        formatter={(value) => formatCurrency(value)}
                    />
                    
                    <Legend />
                    
                    <Bar dataKey="Orçamento" fill="#FFBB33" radius={[4, 4, 0, 0]} barSize={40} />
                    <Bar dataKey="Gasto" fill="#00ADB5" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CategoryBarChart;