import React, { useEffect } from 'react'
import grapesjs from 'grapesjs'
import './_grapes.scss'
import { GrapeSVGs } from '../../utils'

const Grapes = () => {
  useEffect(() => {
    const svgText = GrapeSVGs.svgText
    const svgImage = GrapeSVGs.svgImage
    const svgSection = GrapeSVGs.svgSection
    const svgMobile = GrapeSVGs.svgMobile
    const svgDesktop = GrapeSVGs.svgDesktop
    const svgExport = GrapeSVGs.svgExport
    const svgJSON = GrapeSVGs.svgJSON
    const svgLayers = GrapeSVGs.svgLayers
    const svgStyles = GrapeSVGs.svgStyles
    const svgInfo = GrapeSVGs.svgInfo

    const editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '300px',
      width: 'auto',
      storageManager: false,
      canvas: {
        styles: [
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        ],
        scripts: [
          'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
        ],
      },
      selectorManager: {
        appendTo: '.styles-container',
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section',
            label: svgSection,
            attributes: { class: 'gjs-block-section' },
            content: `<section>
          <h1 class="text-uppercase">This is a simple title</h1>
          <p class="px-2 text-wrap text-sm-start fs-6 text-black">This is just a Lorem text: Lorem ipsum dolor sit amet</p>
        </section>`,
          },
          {
            id: 'text',
            label: svgText,
            content:
              '<p data-gjs-type="text" class="px-2 text-wrap text-sm-start fs-6 text-black">Insert your text here</p>',
          },
          {
            id: 'info',
            label: svgInfo,
            content:
              '<p data-gjs-type="text" class="px-2 text-center m-auto my-2 fs-6 text-info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg> Insert your info text here</p>',
          },
          {
            id: 'image',
            label: svgImage,
            select: true,
            content: { type: 'image' },
            activate: true,
          },
        ],
      },
      layerManager: {
        appendTo: '.layers-container',
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Dimension',
            open: false,
            // Use built-in properties
            buildProps: ['width', 'min-height', 'padding'],
            // Use `properties` to define/override single property
            properties: [
              {
                // Type of the input,
                // options: integer | radio | select | color | slider | file | composite | stack
                type: 'integer',
                name: 'The width', // Label for the property
                property: 'width', // CSS property (if buildProps contains it will be extended)
                units: ['px', '%'], // Units, available only for 'integer' types
                defaults: 'auto', // Default value
                min: 0, // Min value, available only for 'integer' types
              },
            ],
          },
          {
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow', 'custom-prop'],
            properties: [
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options, available only for 'select' and 'radio'  types
                options: [
                  { value: '12px', name: 'Tiny' },
                  { value: '18px', name: 'Medium' },
                  { value: '32px', name: 'Big' },
                ],
              },
            ],
          },
        ],
      },
      deviceManager: {
        devices: [
          {
            name: 'Desktop',
            width: '',
          },
          {
            name: 'Mobile',
            width: '320px',
            widthMedia: '480px',
          },
        ],
      },
      panels: {
        defaults: [
          {
            id: 'layers',
            el: '.panel__right',
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0,
              cl: 1,
              cr: 0,
              bc: 0,
              keyWidth: 'flex-basis',
            },
          },
          {
            id: 'panel-switcher',
            el: '.panel__switcher',
            buttons: [
              {
                id: 'show-layers',
                active: true,
                label: svgLayers,
                command: 'show-layers',
                togglable: false,
              },
              {
                id: 'show-style',
                active: true,
                label: svgStyles,
                command: 'show-styles',
                togglable: false,
              },
            ],
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: svgDesktop,
                command: 'set-device-desktop',
                active: true,
                togglable: false,
              },
              {
                id: 'device-mobile',
                label: svgMobile,
                command: 'set-device-mobile',
                togglable: false,
              },
            ],
          },
        ],
      },
    })

    /* Pannels */
    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    })

    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true,
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility',
        },
        {
          id: 'export',
          className: 'btn-open-export',
          label: svgExport,
          command: 'export-template',
          context: 'export-template',
        },
        {
          id: 'show-json',
          className: 'btn-show-json',
          label: svgJSON,
          context: 'show-json',
          command(editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(
                `<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`,
              )
              .open()
          },
        },
      ],
    })

    /* Layer's and Styles */
    editor.Commands.add('show-layers', {
      getRowEl(editor) {
        return editor.getContainer().closest('.editor-row')
      },
      getLayersEl(row) {
        return row.querySelector('.layers-container')
      },

      run(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor))
        lmEl.style.display = ''
      },
      stop(editor, sender) {
        const lmEl = this.getLayersEl(this.getRowEl(editor))
        lmEl.style.display = 'none'
      },
    })

    editor.Commands.add('show-styles', {
      getRowEl(editor) {
        return editor.getContainer().closest('.editor-row')
      },
      getStyleEl(row) {
        return row.querySelector('.styles-container')
      },

      run(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor))
        smEl.style.display = ''
      },
      stop(editor, sender) {
        const smEl = this.getStyleEl(this.getRowEl(editor))
        smEl.style.display = 'none'
      },
    })

    /* Screen Sizes */
    editor.Commands.add('set-device-desktop', {
      run: (editor) => editor.setDevice('Desktop'),
    })

    editor.Commands.add('set-device-mobile', {
      run: (editor) => editor.setDevice('Mobile'),
    })
  }, [])

  return (
    <div className="grapes my-5">
      <div className="row align-items-center">
        <div className="col-md-4">
          <div className="d-flex justify-content-center">
            <div className="grapesHdr fs-2 text-center text-white d-grid p-2 rounded">
              <img
                src="./assets/images/grapes-logo.png"
                alt="GreenSock Logo"
                className="greenSockLogo"
              />
              GrapesJS
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="installGrapes my-2 d-grid">
            <hr className="pinkGrapes" />
            <i className="text-center">We can use NPM to install GrapesJS.</i>
            <code className="installNPM text-left p-2 m-auto text-white bg-dark rounded">
              npm install gsap
              <span className="blinkingText">|</span>
            </code>
            <hr className="pinkGrapes" />
          </div>
        </div>
        <div className="col-md-4">
          <p>
            GrapesJS is a multi-purpose, Web Builder Framework, which means it
            allows you to easily create a drag & drop-enabled builder of
            anything with HTML-like structure, which entails much more than web
            pages.
          </p>
        </div>
      </div>
      <div className="mb-5">
        <p>
          GrapesJS was designed primarily for use inside Content Management
          Systems to speed up the creation of dynamic templates and replace
          common WYSIWYG editors. Which are good for content editing, but
          inappropriate for creating HTML structures. It's an extensible
          framework that could be used by anyone for any purpose.
        </p>
        <p>
          I've added this to this animation page because like GreenSock it has
          an array of abilities that can make a website more user-friendly.
        </p>
      </div>
      <div className="panel__top">
        <div className="panel__basic-actions"></div>
        <div className="panel__devices"></div>
        <div className="panel__switcher"></div>
      </div>
      <div className="editor-row">
        <div className="editor-canvas">
          <div id="gjs">
            <h1>Drag & Drop Blocks Here</h1>
          </div>
        </div>
        <div className="panel__right">
          <div className="layers-container"></div>
          <div className="styles-container"></div>
        </div>
      </div>
      <div id="blocks"></div>
    </div>
  )
}

export default Grapes
