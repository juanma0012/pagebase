<template>
    <div class="container-fluid">
        <h2>Contáctenos</h2>
        <!-- Page Heading -->
        <div class="tab-content" style="width:80%">           
            <form>

                <div class="form-group"> <!-- Name field -->
                    <label class="control-label " for="name">Nombre</label>
                    <input class="form-control" id="name" name="name" type="text"/>
                </div>
                
                <div class="form-group"> <!-- Email field -->
                    <label class="control-label requiredField" for="email">Correo electrónico<span class="asteriskField">*</span></label>
                    <input class="form-control" id="email" name="email" type="text"/>
                </div>
                
                <div class="form-group"> <!-- Subject field -->
                    <label class="control-label " for="subject">Asunto</label>
                    <input class="form-control" id="subject" name="subject" type="text"/>
                </div>
                
                <div class="form-group"> <!-- Message field -->
                    <label class="control-label " for="message">Mensaje</label>
                    <textarea class="form-control" cols="40" id="message" name="message" rows="10"></textarea>
                </div>
                
                <div class="form-group">
                    <button class="btn btn-primary " name="submit" type="submit">Enviar</button>
                </div>
                
            </form>                             
                    
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
</template>