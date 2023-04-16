import React from 'react'

export default function ModalInvent({
title, 
closeModal,
handleChange,
inventario,
loadingSave,
saveInventario
}) {

  return (

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo {title}</h1>
              <button 
                type="button" 
                className="btn-close" 
                data-bs-dismiss="modalInvent" 
                aria-label="Close"
                onClick={closeModal}
              >
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                    serial:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name="serial"
                    onChange={handleChange}
                    value={inventario.serial}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                    modelo:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name="modelo"
                    onChange={handleChange}
                    value={inventario.modelo}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                   Descripcion:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name="descripcion"
                    onChange={handleChange}
                    value={inventario.descripcion}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                   Foto:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    url="foto"
                    onChange={handleChange}
                    value={inventario.foto}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                   Color:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name="color"
                    onChange={handleChange}
                    value={inventario.color}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                   Usuario:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name="usuario"
                    onChange={handleChange}
                    value={inventario.usuario}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                   Marca:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name="marca"
                    onChange={handleChange}
                    value={inventario.marca}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                   Estado:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name="estado"
                    onChange={handleChange}
                    value={inventario.estado}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" 
                  className="col-form-label">
                   Tipo Equipo:
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="recipient-name"
                    name="tipoEquipo"
                    onChange={handleChange}
                    value={inventario.tipoEquipo}
                  />
                </div>
               
              </form>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Cerrar
              </button>
              {
                loadingSave 
                ? 
                (
                <button 
                  className="btn btn-primary" 
                  type="button" disabled
                >
                  <span 
                    className="spinner-grow spinner-grow-sm" 
                    role="status" 
                    aria-hidden="true"
                  >
                  </span>
                    Guardando...
                </button>
                ) : 
                (
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={saveInventario}
                  disabled={inventario.serial.length == 0 && inventario.modelo.length==0 && inventario.descripcion.length==0 && inventario.foto.length==0 && inventario.color.length==0 && inventario.marca.length==0 && inventario.estado.length==0 && inventario.usuario.length==0 && inventario.tipoEquipo.length==0 }
                >
                Enviar
                </button>
                )
              }
            </div>
          </div>
        </div>
      </div>
      )
    }
    
  

