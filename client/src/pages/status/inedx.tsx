import { Button, Result, Row } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { Layout } from '../../components/layout'

const Statuses: Record<string,string> = {
  created: 'Пользователь успешно создан',
  updated: 'Пользовательно успешно обновлен',
  deleted: 'Пользователь успешно удален'
}

export const Status = () => {
  const {status} = useParams()
  return (
    <Layout
    isVisible={false}>
      <Row align={'middle'} justify={'center'} style={{width:'100%'}}>
        <Result 
          className='testets'
          status={status ? 'success' : '404'}
          title={(status === 'created' || status === 'updated' || status === 'deleted') ? Statuses[status] : 'Не найдено'}
          extra={
            <Button key="dashboard">
              <Link to={'/'}>На главную</Link>
            </Button>
          }
        />
      </Row>
    </Layout>
  )
}
